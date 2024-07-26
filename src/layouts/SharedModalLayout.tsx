import React from "react";
type Props = {
  children?: React.ReactNode;
};

function SharedModalLayout({ children }: Props) {
  return (
    <div className="animate-fade bg-black bg-opacity-70 w-full h-screen fixed top-0 left-0 flex justify-center items-center z-[9999]">
      {children}
    </div>
  );
}

export default SharedModalLayout;
