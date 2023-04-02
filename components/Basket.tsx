import { useGlobalState } from "@/context/Provider";
import { toggleBasket } from "@/context/actions";
import { Block, Button, Link, List, Sheet, Toolbar } from "konsta/react";
import { MdClose } from "react-icons/md";
import FoodItem from "./foods/FoodItem";
import { FoodData } from "@/interfaces/food";
import { Key, useCallback, useEffect, useState } from "react";

const Basket = () => {
  const [{ basket, isBasketOpened }, dispatch]: any = useGlobalState();
  const [totalPrice, setTotalPrice] = useState<number>(0);

  const getTotalPrice = useCallback(() => {
    const sum = basket
      .map((item: any) => item.price)
      .reduce(
        (partialSum: number, itemPrice: number) => partialSum + itemPrice,
        0
      );

    setTotalPrice(sum);
  }, [basket]);

  useEffect(() => {
    getTotalPrice();
  }, [getTotalPrice]);

  return (
    <Sheet
      className="pb-safe"
      opened={isBasketOpened}
      onBackdropClick={() => dispatch(toggleBasket())}
    >
      <Toolbar top>
        <div className="left" />
        <div className="right">
          <Link toolbar onClick={() => dispatch(toggleBasket())}>
            <MdClose className="text-lg" />
          </Link>
        </div>
      </Toolbar>
      <Block>
        <List>
          {basket.map((data: FoodData, index: Key) => (
            <FoodItem key={index} data={data} />
          ))}
        </List>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum ad
          excepturi nesciunt nobis aliquam. Quibusdam ducimus neque
          necessitatibus, molestias cupiditate velit nihil alias incidunt,
          excepturi voluptatem dolore itaque sapiente dolores!
        </p>
        Rp. {totalPrice}
        <div className="mt-4">
          <Button
            className="rounded-md"
            onClick={() => dispatch(toggleBasket())}
          >
            Checkout
          </Button>
        </div>
      </Block>
    </Sheet>
  );
};

export default Basket;
