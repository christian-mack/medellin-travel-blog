import { renderComponentByTypename } from "@/utils/contentful";
import {
  getAllPages,
  getPageBySlug,
  getPagesBySlug,
  getPagesByType,
} from "@/lib/contentful/page";
import { notFound } from "next/navigation";
import { devLog, devLogHeader } from "@/lib/utils";
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
  // devLog(["\n PAGE: [slug2] \n\n", page]);

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
  const blogPages = await getPagesByType("Blog");

  let slugs: any[] = [];

  blogPages.map((page: any) => {
    page.blocksCollection.items.map((block: any) =>
      slugs.push(`${page.slug}/${block.slug}`)
    );
  });

  return slugs;
}
