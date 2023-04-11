import Image from "next/image";
import { useGlobalState } from "@/context/Provider";
import {
  increaseItem,
  decreaseItem,
  removeFromBasket,
} from "@/context/actions";
import { FoodData } from "@/interfaces/food";
import { Button, Stepper } from "konsta/react";
import { FiTrash } from "react-icons/fi";

const FoodItemBasket = ({ data }: { data: FoodData }) => {
  const { title, price, image, quantity } = data;
  const [_, dispatch]: any = useGlobalState();

  const increase = () => dispatch(increaseItem(data));
  const decrease = () => dispatch(decreaseItem(data));
  const handleClick = () => dispatch(removeFromBasket(data));

  return (
    <div className="flex gap-4 items-center">
      <Image
        src={image}
        alt={title}
        width={75}
        height={75}
        className="w-24 h-18 object-center object-cover rounded-md"
      />
      <div className="flex-1">
        <div className="font-semibold">{title}</div>
        <div className="font-bold">Rp. {price}</div>
      </div>
      <div className="">
        <Stepper value={quantity} onPlus={increase} onMinus={decrease} />
        <Button className="bg-red-500 w-fit ml-auto mt-3" onClick={handleClick}>
          <FiTrash className="text-lg" />
        </Button>
      </div>
    </div>
  );
};

export default FoodItemBasket;
