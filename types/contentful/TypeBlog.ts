import type { Asset, Entry, EntryFields, EntrySkeletonType } from "contentful";
import type { TypeCategoryFields } from "./TypeCategory";

export interface TypeBlogFields extends EntrySkeletonType {
  title: EntryFields.Symbol;
  slug: EntryFields.Symbol;
  summary: EntryFields.Symbol;
  content: EntryFields.RichText;
  publishDate?: EntryFields.Date;
  image: Asset;
  authorName: EntryFields.Symbol;
  category: Entry<TypeCategoryFields>;
}

export type TypeBlog = Entry<TypeBlogFields>;
