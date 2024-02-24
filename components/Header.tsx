import AuthButton from "@/components/AuthButton";
import Image from "next/image";
import mtbLogoSvg from "/assets/images/mtb-logo.svg";
import Link from "next/link";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Nav } from "./Nav";

export default function Header() {
  return (
    <div className="w-full flex justify-center border-b border-b-foreground/10 h-16">
      <div className="w-full max-w-6xl flex justify-between items-center py-3 text-sm">
        <div className="flex flex-1 relative">
          <Image
            priority
            src={mtbLogoSvg}
            alt="medellin travel blog logo"
            height={25}
            width={225}
          />
        </div>
        <div className="flex gap-4">
          <Nav />
          <AuthButton />
        </div>
      </div>
    </div>
  );
}
