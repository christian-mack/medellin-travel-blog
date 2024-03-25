import Image from "next/image";
import React from "react";

import mtbLogo from "/assets/images/mtb-logo.svg";
import { Menu } from "../molecules/menu";

export default function Header() {
  return (
    <div className="h-fit items-center mt-6 col-span-12 flex justify-between px-4 md:px-[60px] text-white/90">
      <div className="relative">
        <Image src={mtbLogo} alt="mtb logo" height={100} width={200} />
      </div>
      <div className="">
        <Menu />
      </div>
    </div>
  );
}
