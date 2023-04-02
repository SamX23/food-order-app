import { CustomToast } from "@/interfaces/component";
import { Button, Toast } from "konsta/react";

const CustomToast = ({ isOpen = false, setIsOpen, text = "" }: CustomToast) => {
  return (
    <Toast
      opened={isOpen}
      button={
        <Button rounded clear small inline onClick={() => setIsOpen(false)}>
          Close
        </Button>
      }
    >
      <div className="shrink">{text}</div>
    </Toast>
  );
};

export default CustomToast;
