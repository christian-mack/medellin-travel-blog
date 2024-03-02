import { renderComponentByTypename } from "@/utils/contentful";
import { getAllPages, getPageBySlug } from "@/lib/contentful/pages";
import { notFound } from "next/navigation";
import { devLog } from "@/lib/utils";

export default async function DynamicPage({
  params,
}: {
  params: { slug: string };
}) {
  const page = await getPageBySlug(params.slug);

  if (!page) {
    notFound();
  }

  devLog(["\n [PAGE] \n\n", page.blocksCollection]);

  return (
    <div className="flex flex-col">
      {page.blocksCollection.items.map((item: any) => {
        return (
          <>
            <div key={item.sys.id}>
              {renderComponentByTypename({
                type: item.__typename,
                itemId: item.sys.id,
                slug: params.slug,
              })}
            </div>
          </>
        );
      })}
    </div>
  );
}

export async function generateStaticParams() {
  const pages = await getAllPages();

  return pages.map((page: any) => ({
    slug: page.slug,
  }));
}
