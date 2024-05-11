import { Button, Toast } from "konsta/react";
import { MdClose } from "react-icons/md";

import { CustomToastProps } from "@/interfaces/component";

const CustomToast = ({
  isOpen = false,
  setIsOpen,
  text = "",
}: CustomToastProps) => {
  return (
    <Toast
      opened={isOpen}
      position="right"
      button={
        <Button rounded clear inline onClick={() => setIsOpen(false)}>
          <MdClose className="text-xl" />
        </Button>
      }
    >
      <div className="shrink">{text}</div>
    </Toast>
  );
};

export default CustomToast;
