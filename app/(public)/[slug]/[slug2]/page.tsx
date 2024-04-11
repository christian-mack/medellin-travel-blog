import { renderComponentByTypename } from "@/utils/contentful";
import { getPageBySlug, getPagesByType } from "@/lib/contentful/page";
import { notFound } from "next/navigation";
import { devLog, devLogHeader } from "@/lib/utils";
import RightColumnScroll from "@/components/templates/rightColumnScroll";
import BlogPage from "@/components/templates/blogPage";
import { getBlogPageBySlug } from "@/lib/contentful/blog";
import { TypePage, TypePageFields } from "@/types/contentful";
import { PageT } from "@/types";

export default async function DynamicPage({
  params,
}: {
  params: { slug: string; slug2: string };
}) {
  const page: PageT = await getPageBySlug(params.slug);

  if (!page) {
    notFound();
  }

  switch (page.type) {
    case "Blog":
      const blogData = await getBlogPageBySlug(params.slug2);
      const page = await getPagesByType("Blog");

      return (
        <RightColumnScroll
          heading={blogData.title}
          bgImg={blogData.image.url}
          category={blogData.category.slug}
        >
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
      slugs.push({ slug: page.slug, slug2: block.slug })
    );
  });

  return slugs;
}
