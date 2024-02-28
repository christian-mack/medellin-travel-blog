import { getAllPages, getPageBySlug } from "@/lib/contentful/pages";

export default async function DynamicPage({
  params,
}: {
  params: { slug: string };
}) {
  const page = await getPageBySlug(params.slug);

  console.log(params);

  return (
    <div>
      <h1>{page.title}</h1>
    </div>
  );
}

export async function generateStaticParams() {
  const pages = await getAllPages();

  return pages.map((page: any) => ({
    slug: page.slug,
  }));
}
