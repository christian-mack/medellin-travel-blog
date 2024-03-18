import React from "react";
import { RichText } from "@/components/organisms/richText";

interface BlogContentProps {
  page: any;
}

export default function BlogContent({ page }: BlogContentProps) {
  const {
    category: { title },
    content: { json },
  } = page;

  return (
    <div className="w-full dark:text-white/90 max-w-5xl">
      <p>{title}</p>
      <RichText data={json} />
    </div>
  );
}
