import AuthButton from "@/components/AuthButton";
import Image from "next/image";
import mtbLogoSvg from "/assets/images/mtb-logo.svg";
import Link from "next/link";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export default function Header() {
  return (
    <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
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
        <div className="flex items-center">
          <ul className="flex gap-4 items-center">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <Link href="/tours">Tours</Link>
            </li>
            <li>
              <Link href="/about-us">About Us</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
            <li>
              <Link href="/faq">FAQs</Link>
            </li>
            <li>
              <AuthButton />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
