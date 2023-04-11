import Image from "next/image";
import { useGlobalState } from "@/context/Provider";
import { addToBasket } from "@/context/actions";
import { FoodData } from "@/interfaces/food";
import { ListItem } from "konsta/react";
import { MdAddShoppingCart } from "react-icons/md";

const FoodItem = ({
  data,
  clickable = true,
}: {
  data: FoodData;
  clickable?: boolean;
}) => {
  const { title, subTitle, description, price, image } = data;
  const [_, dispatch]: any = useGlobalState();

  return (
    <ListItem
      title={title}
      after={
        <span className="text-primary font-bold flex items-center">
          Rp. {price} <MdAddShoppingCart className="ml-2 text-xl" />
        </span>
      }
      subtitle={
        <span className="text-white bg-primary px-2 rounded-md">
          {subTitle}
        </span>
      }
      text={description}
      media={
        <Image
          src={image}
          alt={title}
          width={100}
          height={100}
          className="w-28 h-20 object-center object-cover rounded-md"
        />
      }
      onClick={() => clickable && dispatch(addToBasket(data))}
      className="cursor-pointer"
    />
  );
};

export default FoodItem;
