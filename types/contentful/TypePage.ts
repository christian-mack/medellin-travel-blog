import type { Entry, EntryFields, EntrySkeletonType } from "contentful";
import type { TypeBlogFields } from "./TypeBlog";
import type { TypeContactFormFields } from "./TypeContactForm";

export interface TypePageFields extends EntrySkeletonType {
  title: EntryFields.Symbol;
  slug: EntryFields.Symbol;
  blocks: Entry<TypeBlogFields | TypeContactFormFields>[];
  type: "Blog" | "General";
}

export type TypePage = Entry<TypePageFields>;
