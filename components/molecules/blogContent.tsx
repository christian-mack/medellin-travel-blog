import React from "react";
import { RichText } from "@/components/organisms/richText";

interface BlogContentProps {
  page: any;
}

export default function BlogContent({ page }: BlogContentProps) {
  return (
    <div className="w-full dark:text-white/90 max-w-5xl">
      <p>{page.authorName}</p>
      <p>{page.category.title}</p>
      <RichText data={page.content.json} />
    </div>
  );
}
