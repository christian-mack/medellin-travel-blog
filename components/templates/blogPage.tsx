import { RightColumnScrollInner } from "./rightColumnScroll";
import BlogContent from "../molecules/blogContent";
import BreadCrumbHeader from "../molecules/breadCrumbHeader";
import SocialLinks from "../molecules/socialLinks";
import AuthorCard from "../molecules/authorCard";
import Comments from "../organisms/comments";
import NewsletterSignUp from "../molecules/newsletterSignUp";
import RelatedPosts from "../organisms/relatedPosts";

interface BlogPageProps {
  data: any;
}

export default async function BlogPage({ data }: BlogPageProps) {
  const {
    category: { slug },
  } = data;

  return (
    <RightColumnScrollInner>
      <BreadCrumbHeader category={slug} author="Author" />
      <BlogContent page={data} />
      <SocialLinks />
      <AuthorCard />
      <Comments />
      <NewsletterSignUp />
      <RelatedPosts />
    </RightColumnScrollInner>
  );
}
