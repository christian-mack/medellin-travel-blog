import { getBlogPageBySlug } from "@/lib/contentful/blog";
import { devLog } from "@/lib/utils";
import { RightColumnScrollInner } from "./rightColumnScroll";
import BlogContent from "../molecules/blogContent";
import BackModeHeader from "../molecules/backModeHeader";
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
  devLog(["[slug2]: BlogPage Template", data]);

  return (
    <RightColumnScrollInner>
      <BackModeHeader />
      <BreadCrumbHeader />
      <BlogContent page={data} />
      <SocialLinks />
      <AuthorCard />
      <Comments />
      <NewsletterSignUp />
      <RelatedPosts />
    </RightColumnScrollInner>
  );
}
