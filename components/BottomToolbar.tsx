import { useGlobalState } from "@/context/Provider";
import { toggleBasket } from "@/context/actions";
import { Button, Toolbar } from "konsta/react";
import React from "react";
import { BiCartAlt } from "react-icons/bi";

const BottomToolbar = () => {
  const [_, dispatch]: any = useGlobalState();

  return (
    <Toolbar className="bottom-0 left-0 fixed">
      <Button className="rounded-md" onClick={() => dispatch(toggleBasket())}>
        <BiCartAlt className="text-lg" />
        <span className="ml-2">Keranjang</span>
      </Button>
    </Toolbar>
  );
};

export default BottomToolbar;
