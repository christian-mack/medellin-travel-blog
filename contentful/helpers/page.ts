import { TypePageSkeleton } from "../types";
import { Entry } from "contentful";
import { Document as RichTextDocument } from "@contentful/rich-text-types";
import contentfulClient from "../client";
import { ContentImage, parseContentfulContentImage } from "../contentImage";

type PageEntry = Entry<TypePageSkeleton, undefined, string>;

export interface tPage {
  title: string;
  slug: string;
  // TODO: type this
  blocks: any;
  type: string;
}

export function parseContentfulPage(entry?: PageEntry): tPage | null {
  if (!entry) return null;

  return {
    title: entry.fields.title,
    slug: entry.fields.slug,
    blocks: entry.fields.blocks,
    type: entry.fields.type,
  };
}

// fetch all pages from contentful
interface FetchPagesOptions {
  preview: boolean;
}

export async function fetchPages({
  preview,
}: FetchPagesOptions): Promise<tPage[]> {
  const contentful = contentfulClient({ preview });

  const pageResult = await contentful.getEntries<TypePageSkeleton>({
    content_type: "page",
    include: 2,
    order: ["fields.title"],
  });

  return pageResult.items.map(
    (pageEntry) => parseContentfulPage(pageEntry) as tPage
  );
}

// fetch a single page from contentful
interface FetchPageOptions {
  slug: string;
  preview: boolean;
}

export async function fetchPage({
  slug,
  preview,
}: FetchPageOptions): Promise<tPage | null> {
  const contentful = contentfulClient({ preview });

  const pageResult = await contentful.getEntries<TypePageSkeleton>({
    content_type: "page",
    "fields.slug": slug,
    include: 2,
  });

  return parseContentfulPage(pageResult.items[0]);
}
