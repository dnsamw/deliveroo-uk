import React from "react";
import FooterInfoCard from "./UI/FooterInfoCard";

type Props = {};

function Footer({}: Props) {
  return <section className="h-[600px] bg-[#2e3434] flex justify-center items-center gap-6 p-8">
    <FooterInfoCard />
    <FooterInfoCard />
    <FooterInfoCard />
    <FooterInfoCard />
    </section>;
}

export default Footer;
