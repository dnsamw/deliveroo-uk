import React from "react";

type Props = {
  children: React.ReactNode;
};

function CenterModalContainerLayout({ children }: Props) {
  return (
    <div className="animate-zoom w-[600px] bg-white h-screen xl:max-h-[90%] max-w[85%] overflow-y-scroll rounded flex flex-col relative">
      {children}
    </div>
  );
}

export default CenterModalContainerLayout;
