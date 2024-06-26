import { Key, useCallback, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Button, Sheet, Toolbar } from "konsta/react";
import { BiCartAlt } from "react-icons/bi";

import { addToBasket, toggleBasket } from "@/context/actions";
import { useGlobalState } from "@/context/Provider";
import { FoodData } from "@/interfaces/food";
import { TEMPLATE_WA_LINK } from "@/utils/constant/WHATSAPP";
import { clearLocal, getFromLocal } from "@/utils/useLocalStorage";
import FootItemBasket from "./foods/FoodItemBasket";

const Basket = () => {
  const router = useRouter();
  const [{ basket, isBasketOpened }, dispatch]: any = useGlobalState();
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);

  const processBaskets = useCallback(() => {
    const sum = basket
      .map((item: FoodData) => item.price * item.quantity)
      .reduce(
        (partialSum: number, itemPrice: number) => partialSum + itemPrice,
        0
      );
    setTotalPrice(sum);

    // Auto close the basket if the basket is empty
    sum === 0 &&
      basket.length === 0 &&
      isBasketOpened &&
      dispatch(toggleBasket());
  }, [basket, dispatch, isBasketOpened]);

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
      clearLocal("basket");
      router.push(finalUrl);
      dispatch(toggleBasket());
    }, 1000);
  };

  useEffect(() => {
    processBaskets();
  }, [processBaskets]);

  useEffect(() => {
    basket.length === 0 &&
      getFromLocal("basket")?.forEach((item: FoodData) =>
        dispatch(addToBasket(item))
      );
  }, [basket.length, dispatch]);

  return (
    <>
      <div className="p-4 flex flex-col gap-4">
        {basket.map((data: FoodData, index: Key) => (
          <FootItemBasket key={index} data={data} />
        ))}
      </div>

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
    </>
  );
};

export default Basket;
