import { renderComponentByTypename } from "@/utils/contentful";
import {
  getAllPages,
  getPageBySlug,
  getPagesBySlug,
} from "@/lib/contentful/page";
import { notFound } from "next/navigation";
import { devLog } from "@/lib/utils";
import RightColumnScroll from "@/components/templates/rightColumnScroll";
import BlogPage from "@/components/templates/blogPage";
import { getBlogPageBySlug } from "@/lib/contentful/blog";

export default async function DynamicPage({
  params,
}: {
  params: { slug: string; slug2: string };
}) {
  const page = await getPageBySlug(params.slug);

  if (!page) {
    notFound();
  }
  devLog(["\n PAGE: [slug2] \n\n", page]);

  switch (page.type) {
    case "Blog":
      const blogData = await getBlogPageBySlug(params.slug2);
      return (
        <RightColumnScroll heading={blogData.title} bgImg={blogData.image.url}>
          <BlogPage data={blogData} />
        </RightColumnScroll>
      );
    case "General":
      return (
        <RightColumnScroll heading={page.title}>
          {page.blocksCollection.items.map((item: any) => {
            return (
              <>
                <div key={item.sys.id}>
                  {renderComponentByTypename({
                    type: item.__typename,
                    itemId: item.sys.id,
                    slug: params.slug2,
                  })}
                </div>
              </>
            );
          })}
        </RightColumnScroll>
      );
    default:
      return (
        <RightColumnScroll heading={page.title}>
          {page.blocksCollection.items.map((item: any) => {
            return (
              <>
                <div key={item.sys.id}>
                  {renderComponentByTypename({
                    type: item.__typename,
                    itemId: item.sys.id,
                    slug: params.slug2,
                  })}
                </div>
              </>
            );
          })}
        </RightColumnScroll>
      );
  }
}

export async function generateStaticParams() {
  const pages = await getAllPages();

  const secondLevelSlugs = pages.map((page: any) => {
    const { items } = page.blocksCollection;

    items.map((item: any) => {
      const { __typename } = item;

      if (__typename.toLowerCase() === "blog") {
        return { slug: `${page.slug}/${item.slug}` };
      } else {
        slug: page.slug;
      }
    });
  });

  return secondLevelSlugs;
}
