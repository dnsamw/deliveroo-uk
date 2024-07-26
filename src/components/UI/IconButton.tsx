import React from "react";
import {
  IoHomeOutline,
  IoPeopleOutline,
  IoPersonOutline,
  IoSearchOutline,
} from "react-icons/io5";
import { IconButtonTypes } from "../../Config";

type Props = {
  type: IconButtonTypes;
  text?: string;
  isResponsive?: boolean;
  isEnableFocus?: boolean;
  onClick?: () => void;
};

function IconButton({ type, text,isResponsive,isEnableFocus,onClick }: Props) {
  const renderIcon = (type: IconButtonTypes) => {
    const btnClasses = `text-xl text-teal-400`;
    switch (type) {
      case IconButtonTypes.SIGNUP_LOGIN:
        return <IoHomeOutline className={btnClasses} />;
      case IconButtonTypes.ACCOUNT:
        return <IoPersonOutline className={btnClasses} />;
      case IconButtonTypes.GROUP_ORDER:
        return <IoPeopleOutline className={btnClasses} />;
      case IconButtonTypes.SEARCH:
        return <IoSearchOutline className={btnClasses} />;
      default:
        return;
    }
  };

  const handleClick = () => {
    if(onClick) onClick()
  };

  return (
    <button onClick={handleClick} className="flex text-md items-center gap-2 border px-4 py-2 rounded-md hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-100">
      <div>{renderIcon(type)}</div>
      {!!text &&<div className={isResponsive ?"hidden lg:block" : "block"}>{text}</div>}
    </button>
  );
}

export default IconButton;
