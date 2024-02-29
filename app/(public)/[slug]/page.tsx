import { SectionContainer } from "@/components/SectionContainer";
import { getAllPages, getPageBySlug } from "@/lib/contentful/pages";
import { notFound } from "next/navigation";

export default async function DynamicPage({
  params,
}: {
  params: { slug: string };
}) {
  const page = await getPageBySlug(params.slug);

  console.log(params);

  if (!page) {
    notFound();
  }

  return (
    <SectionContainer>
      <h1>{page.title}</h1>
    </SectionContainer>
  );
}

export async function generateStaticParams() {
  const pages = await getAllPages();

  return pages.map((page: any) => ({
    slug: page.slug,
  }));
}
