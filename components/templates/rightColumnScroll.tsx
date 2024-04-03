import Header from "@/components/organisms/header";
import mtnsImg from "/assets/images/colombian-mountains.jpg";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function RightColumnScrollBase({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="grid grid-cols-12 w-full">{children}</div>;
}

export function RightColumnScrollInner({
  children,
  styles,
}: {
  children: React.ReactNode;
  styles?: string;
}) {
  return (
    <div className={cn("w-full flex flex-col px-5 mt-10", styles)}>
      {children}
    </div>
  );
}

interface RightColumnScrollProps {
  children: React.ReactNode;
  heading: string;
  categories?: React.ReactNode[];
  category?: string;
  bgImg?: string;
}

export default function RightColumnScroll({
  children,
  heading,
  bgImg,
  categories,
  category,
}: RightColumnScrollProps) {
  return (
    <>
      <div className="col-span-12 lg:col-span-6 w-full h-screen relative overflow-hidden">
        <div className="image-overlay h-screen w-screen absolute z-[1] bg-gradient-to-b from-zinc-900/80 via-transparent to-zinc-900/80" />
        <Image src={bgImg || mtnsImg} alt="" className="object-cover" fill />
        <div className="relative grid grid-cols-12 grid-rows-3 h-screen z-[2]">
          <Header />
          <div className="col-span-12 row-start-3 flex flex-col justify-end px-[20px] md:px-[60px] pb-8">
            <div className="w-full md:mb-6 text-white/90">
              {category && (
                <Link className="text-sm" href={`/${category}`}>
                  {category}
                </Link>
              )}
              <h1 className="text-4xl md:text-6xl">{heading}</h1>
            </div>
            {categories && (
              <div className="w-full">
                <ul className="flex text-white w-full gap-4">
                  {categories.map((category: any) => (
                    <li key={category.id}>
                      <Link href={`/blog/category/${category.slug}`}>
                        {category.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* right div scrolls on big screens. no scroll on mobile. */}
      <div className="grid col-span-12 lg:col-span-6 w-full h-screen  sm:overflow-scroll">
        {children}
      </div>
    </>
  );
}
