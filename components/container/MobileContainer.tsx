import { App as KonstaApp } from "konsta/react";

const MobileContainer = ({ children }: any) => {
  return (
    <KonstaApp theme="ios" className="max-w-md mx-auto">
      {children}
    </KonstaApp>
  );
};

export default MobileContainer;
