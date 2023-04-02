import { useGlobalState } from "@/context/Provider";
import { toggleBasket } from "@/context/actions";
import { Block, Button, Toolbar } from "konsta/react";
import React from "react";

const BottomToolbar = () => {
  const [_, dispatch]: any = useGlobalState();

  return (
    <Toolbar className="bottom-0 fixed">
      <Block className="bg-primary w-full">
        <Button onClick={() => dispatch(toggleBasket())}>Cart</Button>
      </Block>
    </Toolbar>
  );
};

export default BottomToolbar;
