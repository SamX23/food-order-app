import { useEffect } from "react";
import { App as KonstaApp } from "konsta/react";

import { toggleDarkMode } from "@/context/actions";
import { useGlobalState } from "@/context/Provider";

const MobileContainer = ({ children }: any) => {
  const [_, dispatch]: any = useGlobalState();

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      dispatch(toggleDarkMode());
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dispatch]);

  return (
    <KonstaApp theme="ios" className="max-w-md mx-auto" safeAreas>
      {children}
    </KonstaApp>
  );
};

export default MobileContainer;
