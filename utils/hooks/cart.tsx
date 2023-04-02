import { useGlobalState } from "@/context/Provider";
import { FoodData } from "@/interfaces/food";
import { useCallback, useEffect, useState } from "react";

const useCartListener = () => {
  const [{ basket }]: any = useGlobalState();
  const [toastOpened, setToastOpened] = useState<boolean>(false);
  const [lastItemName, setLastItemName] = useState<string>("");

  const openToast = useCallback((setter: (arg0: boolean) => void) => {
    // close other toast
    setter(true);
    setTimeout(() => setter(false), 1500);
  }, []);

  useEffect(() => {
    if (basket.length > 0) {
      const latestItem: FoodData = basket.at(-1);
      console.log("Recently Added : ", latestItem);
      setLastItemName(latestItem.title);
      openToast(setToastOpened);
    }
  }, [basket, openToast]);

  return { lastItemName, toastOpened, setToastOpened };
};

export default useCartListener;
