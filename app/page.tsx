import Image from "next/image";

import { Post } from "@/components/Post";
import { getAllBlogPages } from "@/lib/contentful/blogPages";
import Header from "@/components/organisms/header";

import mtnsImg from "/assets/images/colombian-mountains.jpg";
import { getAllCategories } from "@/lib/contentful/category";
import Link from "next/link";

export default async function Index() {
  const blogPages = await getAllBlogPages();
  const categories = await getAllCategories();

  return (
    <div className="grid grid-cols-12 w-full">
      <div className="col-span-12 lg:col-span-6 w-full h-screen relative overflow-hidden">
        <div className="image-overlay h-screen w-screen absolute z-[1] bg-gradient-to-b from-zinc-900/80 via-transparent to-zinc-900/80" />
        <Image src={mtnsImg} alt="" className="object-cover" fill />
        <div className="relative grid grid-cols-12 grid-rows-3 h-screen z-[2]">
          <Header />
          <div className="col-span-12 row-start-3 flex flex-col justify-end px-4 md:px-8 pb-4 md:pb-8">
            <div className="w-full mb-6">
              <h1 className="text-white/90 text-4xl">
                Embrace <span className="italic">Adventure </span> in the city
                of eternal spring.
              </h1>
            </div>
            <div className="w-full">
              <ul className="flex text-white w-full gap-4">
                {categories.map((category: any) => (
                  <li>
                    <Link href={`/blog/category/${category.slug}`}>
                      {category.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* blog list section */}
      <div className="grid col-span-12 lg:col-span-6 w-full h-screen  sm:overflow-scroll">
        {blogPages.map((page: any) => (
          <Post
            key={page.id}
            title={page.title}
            category={page.category.title}
            publishDate={page.publishDate}
            authorName={page.authorName}
            postImgUrl={page.image.url}
            postUrl={`/blog/${page.slug}`}
          />
        ))}
      </div>
    </div>
  );
}
