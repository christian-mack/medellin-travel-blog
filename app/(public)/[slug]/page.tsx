import {
  getAllPages,
  getPageBySlug,
  getPagesBySlug,
} from "@/lib/contentful/page";
import { notFound } from "next/navigation";
import { devLog } from "@/lib/utils";
import { getAllCategories } from "@/lib/contentful/category";
import DefaultPage from "@/components/templates/defaultPage";
import CategoryListPage from "@/components/templates/categoryListPage";

export default async function DynamicPage({
  params,
}: {
  params: { slug: string };
}) {
  const page = await getPageBySlug(params.slug);
  const categories = await getAllCategories();

  if (!page) {
    notFound();
  }

  const {
    blocksCollection: { items },
  } = page;

  const isCategoryListPage =
    categories &&
    categories.some((category: any) => params.slug === category.slug);

  switch (isCategoryListPage) {
    case true:
      const pages = await getPagesBySlug(params.slug);
      return <CategoryListPage slug={params.slug} pages={pages} />;
    case false:
      return <DefaultPage items={items} slug={params.slug} page={page} />;
    default:
      return <DefaultPage items={items} slug={params.slug} page={page} />;
  }
}

export async function generateStaticParams() {
  const pages = await getAllPages();

  return pages.map((page: any) => ({
    slug: page.slug,
  }));
}
