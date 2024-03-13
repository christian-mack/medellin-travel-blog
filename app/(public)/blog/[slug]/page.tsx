import AuthorCard from "@/components/molecules/authorCard";
import BackModeHeader from "@/components/molecules/backModeHeader";
import BlogContent from "@/components/molecules/blogContent";
import NewsletterSignUp from "@/components/molecules/newsletterSignUp";
import SocialLinks from "@/components/molecules/socialLinks";
import Comments from "@/components/organisms/comments";
import RelatedPosts from "@/components/organisms/relatedPosts";
import RightColumnScroll, {
  RightColumnScrollInner,
} from "@/components/templates/rightColumnScroll";
import { getAllBlogPages, getBlogPageBySlug } from "@/lib/contentful/blogPages";
import { notFound } from "next/navigation";
import BreadCrumbHeader from "@/components/molecules/breadCrumbHeader";

export default async function Page({ params }: { params: { slug: string } }) {
  const page = await getBlogPageBySlug(params.slug);

  if (!page) {
    notFound();
  }

  return (
    <RightColumnScroll heading={page.title} bgImg={page.image.url}>
      <RightColumnScrollInner>
        <BackModeHeader />
        <BreadCrumbHeader />
        <BlogContent page={page} />
        <SocialLinks />
        <AuthorCard />
        <Comments />
        <NewsletterSignUp />
        <RelatedPosts />
      </RightColumnScrollInner>
    </RightColumnScroll>
  );
}
export async function generateStaticParams() {
  const allBlogPages = await getAllBlogPages();

  return allBlogPages.map((page: any) => ({
    slug: page.slug,
  }));
}
