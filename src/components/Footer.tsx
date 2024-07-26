import React from "react";
import FooterInfoCard from "./UI/FooterInfoCard";

type Props = {};

function Footer({}: Props) {
  return <section className="h-auto bg-[#2e3434] p-8 flex justify-center">
    <div className="w-full xl:w-[85%] grid grid-cols-1 lg:grid-cols-2 justify-content-center xl:flex xl:justify-center gap-4  p-4">
    <FooterInfoCard />
    <FooterInfoCard />
    <FooterInfoCard />
    <FooterInfoCard />
    </div>
    </section>;
}

export default Footer;
