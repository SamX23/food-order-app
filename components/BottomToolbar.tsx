import React from "react";
import { Button } from "konsta/react";
import { BiCartAlt } from "react-icons/bi";

import { toggleBasket } from "@/context/actions";
import { useGlobalState } from "@/context/Provider";

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
