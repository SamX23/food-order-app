import { Key, useCallback, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Button, List, Sheet, Toolbar } from "konsta/react";
import { useGlobalState } from "@/context/Provider";
import { toggleBasket } from "@/context/actions";
import FoodItem from "./foods/FoodItem";
import { FoodData } from "@/interfaces/food";
import { TEMPLATE_WA_LINK } from "@/utils/constant/WHATSAPP";
import { BiCartAlt } from "react-icons/bi";

const Basket = () => {
  const router = useRouter();
  const [{ basket, isBasketOpened }, dispatch]: any = useGlobalState();
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);

  const processBaskets = useCallback(() => {
    const sum = basket
      .map((item: FoodData) => item.price)
      .reduce(
        (partialSum: number, itemPrice: number) => partialSum + itemPrice,
        0
      );

    setTotalPrice(sum);
  }, [basket]);

  const handleCheckout = () => {
    setLoading(true);

    const itemNameAndQuantity = basket.map((item: FoodData) => {
      const formatTitle = item.title.replace(" ", "%20");
      return {
        name: formatTitle,
        quantity: item.quantity,
      };
    });

    let templateFoodAndItem = "";

    itemNameAndQuantity.forEach(
      ({ name, quantity }: any) =>
        (templateFoodAndItem += `*${name}*%20x%20*${quantity}*%2C%20`)
    );

    const finalUrl = TEMPLATE_WA_LINK(templateFoodAndItem, totalPrice);

    setTimeout(() => {
      setLoading(false);
      router.push(finalUrl);
      dispatch(toggleBasket());
    }, 1000);
  };

  useEffect(() => {
    processBaskets();
  }, [processBaskets]);

  return (
    <Sheet
      className="pb-safe"
      opened={isBasketOpened}
      onBackdropClick={() => dispatch(toggleBasket())}
    >
      <Toolbar top>
        <div className="flex items-center justify-center w-full">
          <span className="font-bold uppercase">Keranjang Pesanan</span>
        </div>
      </Toolbar>

      <List>
        {basket.map((data: FoodData, index: Key) => (
          <FoodItem key={index} data={data} clickable={false} />
        ))}
      </List>

      <div className="flex items-center justify-start w-full border-t dark:border-t-slate-700 p-4">
        <div className="bg-slate-500 text-white dark:bg-white dark:text-primary rounded-full p-2 mr-2">
          <BiCartAlt className="text-xl" />
        </div>

        <div className="whitespace-nowrap flex items-start flex-col">
          <span>Total Harga</span>
          <span className="font-bold text-lg text-primary">
            Rp. {totalPrice}
          </span>
        </div>

        <Button
          className="ml-auto rounded-xl py-6 px-4 max-w-fit shadow"
          onClick={handleCheckout}
        >
          {loading ? "Membuka whatsapp" : "Beli Sekarang"}
        </Button>
      </div>
    </Sheet>
  );
};

export default Basket;
