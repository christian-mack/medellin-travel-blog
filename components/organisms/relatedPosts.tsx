import React from "react";

interface RelatedPostProps {
  title: string;
  author: string;
  date: string;
  excerpt: string;
  imageUrl: string;
}

export default function RelatedPost({
  title,
  author,
  date,
  excerpt,
  imageUrl,
}: RelatedPostProps) {
  return (
    <div className="mx-auto my-8">
      <h2 className="text-2xl font-bold mb-4">Related Posts</h2>
      <div className="overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-auto object-cover"
        />
        <div className="pt-4 dark:text-white/90">
          <div className="text-sm uppercase tracking-wide font-semibold">
            Reviews
          </div>
          <h3 className="text-lg font-bold my-1">{title}</h3>
          <p className="text-sm">{excerpt}</p>
          <div className="text-xs mt-4">
            {author} · {date}
          </div>
        </div>
      </div>
    </div>
  );
}
