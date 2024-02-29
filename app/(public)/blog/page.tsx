import { Post } from "@/components/Post";
import { SectionContainer } from "@/components/SectionContainer";
import { SectionHeader } from "@/components/SectionHeader";
import { SectionWrapper } from "@/components/SectionWrapper";
import { getAllBlogPages } from "@/lib/contentful/blogPages";

export default async function Page() {
  const blogPages = await getAllBlogPages();

  return (
    <SectionContainer>
      <SectionWrapper elemId="blog">
        <SectionHeader
          title="All"
          titleColor="text-zinc-900"
          titleLastWord="Posts"
          titleLastWordColor="text-zinc-900"
          subtitle="all articles"
          subtitleColor="text-white"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          descriptionColor="text-white"
          separatorColor="bg-zinc-900"
        />
        <div className="grid grid-cols-3 gap-4">
          {blogPages.map((page: any) => (
            <div className="col-span-1" key={page.id}>
              <Post
                title={page.title}
                category={page.category}
                publishDate={page.publishDate}
                authorName={page.authorName}
                avatarImgUrl="https://picsum.photos/200"
                postImgUrl={page.image.url}
                columns="three"
                postUrl={`/blog/${page.slug}`}
              />
            </div>
          ))}
        </div>
      </SectionWrapper>
    </SectionContainer>
  );
}
