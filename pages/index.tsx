import { Navbar, Block, BlockTitle, List } from "konsta/react";
import { useGlobalState } from "@/context/Provider";
import Image from "next/image";
import Layout from "@/components/layout";
import FoodItem from "@/components/foods/FoodItem";
import Basket from "@/components/Basket";
import BottomToolbar from "@/components/BottomToolbar";
import CustomToast from "@/components/Toast";
import { FOOD_DATA } from "@/utils/constant/FOOD_DATA";
import useCartListener from "@/utils/hooks/cart";

const Home = (): JSX.Element => {
  // State
  const [{ basket }]: any = useGlobalState();

  // Hooks
  const { lastItemName, toastOpened, setToastOpened } = useCartListener();

  return (
    <Layout>
      <Navbar large transparent title="Jajanan Bu Nanay" subtitle="Subtitle" />
      <BlockTitle>Ayo jajan di warung online bu Nanay</BlockTitle>
      <Block strong inset>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto tempore
          ratione unde accusantium distinctio nulla quia numquam earum odio,
          optio, nisi rem deserunt. Molestiae delectus, ut assumenda numquam
          magni enim.
        </p>
      </Block>

      <Block className="space-y-4">
        <Image
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
          className="mx-auto my-4 dark:bg-white p-2 rounded"
        />

        <BlockTitle>Food List</BlockTitle>
        <List>
          {FOOD_DATA.map((data, index) => (
            <FoodItem key={index} data={data} />
          ))}
        </List>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto tempore
          ratione unde accusantium distinctio nulla quia numquam earum odio,
          optio, nisi rem deserunt. Molestiae delectus, ut assumenda numquam
          magni enim.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto tempore
          ratione unde accusantium distinctio nulla quia numquam earum odio,
          optio, nisi rem deserunt. Molestiae delectus, ut assumenda numquam
          magni enim.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto tempore
          ratione unde accusantium distinctio nulla quia numquam earum odio,
          optio, nisi rem deserunt. Molestiae delectus, ut assumenda numquam
          magni enim.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto tempore
          ratione unde accusantium distinctio nulla quia numquam earum odio,
          optio, nisi rem deserunt. Molestiae delectus, ut assumenda numquam
          magni enim.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto tempore
          ratione unde accusantium distinctio nulla quia numquam earum odio,
          optio, nisi rem deserunt. Molestiae delectus, ut assumenda numquam
          magni enim.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto tempore
          ratione unde accusantium distinctio nulla quia numquam earum odio,
          optio, nisi rem deserunt. Molestiae delectus, ut assumenda numquam
          magni enim.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto tempore
          ratione unde accusantium distinctio nulla quia numquam earum odio,
          optio, nisi rem deserunt. Molestiae delectus, ut assumenda numquam
          magni enim.
        </p>
      </Block>

      {/* Sheet Basket Checkout */}
      <Basket />

      {/* Basket Info */}
      {basket.length > 0 && <BottomToolbar />}

      {/* Toast */}
      <CustomToast
        isOpen={toastOpened}
        setIsOpen={setToastOpened}
        text={lastItemName}
      />
    </Layout>
  );
};

export default Home;
