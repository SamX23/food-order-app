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
      <Navbar large transparent title="Jajanan Bu Nanay" />

      <Block strong className="text-center">
        <h1 className="text-xl w-[200px] mx-auto font-semibold mb-2">
          Ayo jajan di warung online{" "}
          <span className="text-primary font-bold">Bu Nanay</span>
        </h1>
        <p className="text-slate-900 dark:text-slate-300">
          Jajanan sehat, halal dan berkah
        </p>

        <Image
          src="/assets/images/fla-3.jpg"
          alt="Cover Kue"
          width={300}
          height={37}
          priority
          className="mx-auto my-4 dark:bg-white p-1 rounded"
        />
      </Block>

      <div className="text-center w-full">
        <h2 className="text-lg font-semibold uppercase">Daftar Makanan</h2>
        <p className="text-slate-900 dark:text-slate-300 text-xs">
          Tekan makanan untuk ditambahkan ke keranjang
        </p>
      </div>

      <List strongIos>
        {FOOD_DATA.map((data, index) => (
          <FoodItem key={index} data={data} />
        ))}
      </List>

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
