import { useGlobalState } from "@/context/Provider";
import { useCallback, useEffect, useState } from "react";

const useCartListener = () => {
  const [{ basket }]: any = useGlobalState();
  const [toastOpened, setToastOpened] = useState<boolean>(false);
  const [lastItemName, setLastItemName] = useState<string>("");
  const basketLastItem = basket.at(-1);

  const openToast = useCallback((setter: (arg0: boolean) => void) => {
    setter(true);
    setTimeout(() => setter(false), 1500);
  }, []);

  useEffect(() => {
    if (basket.length > 0) {
      setLastItemName(`${basketLastItem?.title} ditambakan ke keranjang !`);
      openToast(setToastOpened);
    }
  }, [basket.length, basketLastItem?.title, openToast]);

  return { lastItemName, toastOpened, setToastOpened };
};

export default useCartListener;
