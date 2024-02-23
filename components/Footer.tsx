import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import mtbLogoSvg from "/assets/images/mtb-logo.svg";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-neutral-950 w-full text-white flex flex-col justify-center items-center">
      <div className="w-full justify-center max-w-6xl">
        <div className="flex justify-between my-14">
          <div>
            <p className="text-5xl">MTB</p>
          </div>
          <div className="text-center">
            <p>LATEST ARTICLES</p>
            <ul>
              <li>Home</li>
              <li>About Us</li>
              <li>Tours</li>
              <li>FAQs</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="text-center">
            <p>QUICK MENU</p>
            <ul>
              <li>Home</li>
              <li>About Us</li>
              <li>Tours</li>
              <li>FAQs</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="text-center">
            <p>ACCOUNT</p>
            <ul>
              <li>Profile</li>
              <li>Bookings</li>
              <li>Tours</li>
            </ul>
          </div>
        </div>
        <div className="my-8">
          <div className="flex flex-1 w-full justify-center">
            <Image
              priority
              src={mtbLogoSvg}
              alt="medellin travel blog logo"
              width={500}
              height={136}
              objectFit="contain"
            />
          </div>
          <div className="flex justify-center mt-4">
            <ul className="flex gap-x-10 text-md">
              <li>Instagram</li>
              <li>YouTube</li>
              <li>Facebook</li>
              <li>TikTok</li>
            </ul>
          </div>
        </div>
        <Separator className="opacity-50" />
        <div className="flex justify-between my-8 text-zinc-100/90 text-sm">
          <p>@ 2024 Medellin Travel Blog. All Rights Reserved.</p>
          <p>
            Build by{" "}
            <Link href="https://www.maverickdigital.xyz">
              Maverick Digital Solutions
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
