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
  const { category, authorName, publishDate } = data;

  return (
    <RightColumnScrollInner styles="md:px-[60px]">
      <BreadCrumbHeader
        // TODO: fix type issue here
        // @ts-ignore
        category={category.title}
        author={authorName}
        publishDate={publishDate || "Publish Date Not Found"}
        timeToRead="4"
      />
      <BlogContent page={data} />
      <SocialLinks />
      <AuthorCard
        name=""
        title=""
        bio="Etiam vitae dapibus rhoncus. Eget etiam aenean nisi montes felis
        pretium donec veni. Pede vidi condimentum et aenean hendrerit. Quis
        sem justo nisi varius tincidunt nec aliquam arcu tempus vel laoreet
        lorem."
        imageUrl="https://github.com/shadcn.png"
      />
      <Comments />
      <NewsletterSignUp />
      <RelatedPosts
        title="10 Ways To Avoid Paying For Extra Fees At The Airport"
        author="Elliot Alderson"
        date="February 12, 2021"
        excerpt="Structured gripped tape invisible moulded cups for sauppor firm hold strong powermesh front liner sport detail. Warmth comfort…"
        imageUrl="https://github.com/shadcn.png"
      />
    </RightColumnScrollInner>
  );
}
