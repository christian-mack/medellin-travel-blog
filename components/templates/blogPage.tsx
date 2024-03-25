import { RightColumnScrollInner } from "./rightColumnScroll";
import BlogContent from "../molecules/blogContent";
import BreadCrumbHeader from "../molecules/breadCrumbHeader";
import SocialLinks from "../molecules/socialLinks";
import AuthorCard from "../molecules/authorCard";
import Comments from "../organisms/comments";
import NewsletterSignUp from "../molecules/newsletterSignUp";
import RelatedPosts from "../organisms/relatedPosts";
import { TypeBlogFields } from "@/types/contentful";

interface BlogPageProps {
  data: TypeBlogFields;
}

export default async function BlogPage({ data }: BlogPageProps) {
  const {
    category: { slug },
    authorName,
    publishDate,
  } = data;

  return (
    <RightColumnScrollInner styles="px-[60px]">
      <BreadCrumbHeader
        category={slug}
        author={authorName}
        publishDate={publishDate || "Publish Date Not Found"}
        timeToRead="4"
      />
      <BlogContent page={data} />
      <SocialLinks />
      <AuthorCard />
      <Comments />
      <NewsletterSignUp />
      <RelatedPosts />
    </RightColumnScrollInner>
  );
}
