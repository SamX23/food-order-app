import { ReactElement, useEffect, useRef } from "react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Image from "next/image";
import { Block, BlockHeader, BlockTitle, List } from "konsta/react";
import Typed from "typed.js";

import Basket from "@/components/Basket";
import BottomToolbar from "@/components/BottomToolbar";
import MobileContainer from "@/components/container/MobileContainer";
import FoodItem from "@/components/foods/FoodItem";
import Layout from "@/components/layout";
import { toggleBasket } from "@/context/actions";
import { useGlobalState } from "@/context/Provider";
import { FOOD_DATA } from "@/data/FOOD_DATA";
import { NextPageWithLayout } from "./_app";

const Home: NextPageWithLayout = () => {
  // State
  const [{ basket, isBasketOpened }, dispatch]: any = useGlobalState();
  const textElement = useRef(null);

  // Hooks
  const { t } = useTranslation("common");

  // Functions
  useEffect(() => {
    const typed = new Typed(textElement.current, {
      strings: ["Kemplang", "Fla Hijau", "Brownies Kukus", "Roti Talem"],
      typeSpeed: 100,
      backSpeed: 50,
      loop: true,
      loopCount: 2,
      backDelay: 900,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <Layout metaTitle="Jajanan Bu Nanay">
      <Layout.Header title="Jajanan Bu Nanay" />
      <Layout.Content>
        <BlockTitle className="text-center">
          <h1 className="text-xl w-[200px] mx-auto font-semibold">
            {t("home-title")}{" "}
            <span className="text-primary font-bold">Bu Nanay</span>
          </h1>
        </BlockTitle>
        <BlockHeader className="text-center">
          <div className="w-full">
            <p>
              <span className="text-red-500 font-semibold" ref={textElement} />
            </p>
            <p className="text-slate-900 dark:text-slate-300">
              Jajanan sehat, halal dan berkah asli Cianjur
            </p>
          </div>
        </BlockHeader>
        <Block strong inset outline>
          <Image
            src="/assets/images/fla-3.jpg"
            alt="Cover Kue"
            width={300}
            height={37}
            priority
            className="mx-auto my-4 dark:bg-white p-1 rounded"
          />
        </Block>

        <Block strong inset outline>
          <div className="text-center w-full">
            <h2 className="text-lg font-semibold uppercase">Daftar Makanan</h2>
            <p className="text-slate-900 dark:text-slate-300 text-xs">
              Tekan makanan untuk ditambahkan ke keranjang
            </p>
          </div>
        </Block>
        <List strong outline>
          {FOOD_DATA.map((data, index) => (
            <FoodItem key={index} data={data} />
          ))}
        </List>
      </Layout.Content>

      {/* Basket Info */}
      {basket.length > 0 && (
        <Layout.Footer>
          <BottomToolbar />
        </Layout.Footer>
      )}
      {/* Sheet Basket Checkout */}

      <Layout.SheetModal
        title="Keranjang Pesanan"
        isOpen={isBasketOpened}
        setIsOpen={() => dispatch(toggleBasket())}
      >
        <Basket />
      </Layout.SheetModal>
    </Layout>
  );
};

Home.getLayout = (page: ReactElement) => (
  <MobileContainer>{page}</MobileContainer>
);

export default Home;

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      // Will be passed to the page component as props
    },
  };
}
