import Header from "@/components/organisms/header";
import mtnsImg from "/assets/images/colombian-mountains.jpg";
import Image from "next/image";
import Link from "next/link";

export function RightColumnScrollBase({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="grid grid-cols-12 w-full">{children}</div>;
}

interface RightColumnScrollProps {
  children: React.ReactNode;
  heading: string;
  categories?: React.ReactNode[];
  bgImg?: string;
}

export default function RightColumnScroll({
  children,
  heading,
  bgImg,
  categories,
}: RightColumnScrollProps) {
  return (
    <>
      <div className="col-span-12 lg:col-span-6 w-full h-screen relative overflow-hidden">
        <div className="image-overlay h-screen w-screen absolute z-[1] bg-gradient-to-b from-zinc-900/80 via-transparent to-zinc-900/80" />
        <Image src={bgImg || mtnsImg} alt="" className="object-cover" fill />
        <div className="relative grid grid-cols-12 grid-rows-3 h-screen z-[2]">
          <Header />
          <div className="col-span-12 row-start-3 flex flex-col justify-end px-4 pb-4">
            <div className="w-full mb-6">
              <h1 className="text-white/90 text-4xl">{heading}</h1>
            </div>
            {categories && (
              <div className="w-full">
                <ul className="flex text-white w-full gap-4">
                  {categories.map((category: any) => (
                    <li>
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
