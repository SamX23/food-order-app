import { useGlobalState } from "@/context/Provider";
import { toggleBasket } from "@/context/actions";
import { Button } from "konsta/react";
import React from "react";
import { BiCartAlt } from "react-icons/bi";

const BottomToolbar = () => {
  const [_, dispatch]: any = useGlobalState();

  return (
    <Button className="rounded-md" onClick={() => dispatch(toggleBasket())}>
      <BiCartAlt className="text-lg" />
      <span className="ml-2">Keranjang</span>
    </Button>
  );
};

export default BottomToolbar;
