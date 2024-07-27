import React from "react";

type Props = {
  href: string;
  linkText: string;
  icon?: JSX.Element;
};

function ModalIconLink({ href, linkText, icon }: Props) {
  return (
    <div className="p-4 text-md border text-teal-400">
      {icon || ""}
      <a href={href}>{linkText}</a>
    </div>
  );
}

export default ModalIconLink;
