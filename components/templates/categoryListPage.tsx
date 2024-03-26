import { cn } from "@/lib/utils";
import RightColumnScroll, { RightColumnScrollInner } from "./rightColumnScroll";
import Image from "next/image";
import { inter } from "@/app/fonts";
import BackModeHeader from "../molecules/backModeHeader";
import Link from "next/link";

interface CategoryPageProps {
  slug: string;
  pages: any;
}

export default async function CategoryListPage({
  slug,
  pages,
}: CategoryPageProps) {
  // devLog([devLogHeader("[PAGE]: [slug] -> CategoryListPage"), pages]);

  return (
    <RightColumnScroll heading={`Get inspried by posts about ${slug}`}>
      <RightColumnScrollInner styles="px-[60px]">
        <BackModeHeader />
        <div className="grid grid-cols-2 gap-12 mt-20">
          {pages.map((page: any) => {
            return page.blocksCollection.items.map((item: any) => (
              <Link href={`${slug}/${item.slug}`}>
                <div key={item.sys.id} id={`${item.category.slug}-post`}>
                  <div className="relative w-full h-40">
                    <Image src={item.image.url} alt="" fill />
                  </div>
                  <div className="flex flex-col gap-3 mt-4">
                    <p>{item.category.slug}</p>
                    <p className="text-xl">{page.title}</p>
                    <span
                      className={cn(
                        "flex justify-between text-xs",
                        inter.className
                      )}
                    >
                      <p>{item.authorName}</p>
                      <p>{new Date(item.publishDate).toDateString()}</p>
                    </span>
                  </div>
                </div>
              </Link>
            ));
          })}
        </div>
      </RightColumnScrollInner>
    </RightColumnScroll>
  );
}
