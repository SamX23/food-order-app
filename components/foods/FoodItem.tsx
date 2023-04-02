import Image from "next/image";
import { useGlobalState } from "@/context/Provider";
import { addToBasket } from "@/context/actions";
import { FoodData } from "@/interfaces/food";
import { ListItem } from "konsta/react";

const FoodItem = ({ data }: { data: FoodData }) => {
  const { title, subTitle, description, price, image } = data;
  const [_, dispatch]: any = useGlobalState();

  return (
    <ListItem
      title={title}
      after={`Rp. ${price}`}
      subtitle={subTitle}
      text={description}
      media={
        <Image
          src={image}
          alt={title}
          width={80}
          height={80}
          priority
          className="w-28 h-20 object-center object-cover rounded-md"
        />
      }
      onClick={() => dispatch(addToBasket(data))}
    />
  );
};

export default FoodItem;
