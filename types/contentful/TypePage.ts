import type { Entry, EntryFields } from "contentful";
import type { TypeBlogFields } from "./TypeBlog";
import type { TypeContactFormFields } from "./TypeContactForm";

export interface TypePageFields {
  title: EntryFields.Symbol;
  slug: EntryFields.Symbol;
  blocks: Entry<TypeBlogFields | TypeContactFormFields>[];
  type: "Blog" | "General";
}

export type TypePage = Entry<TypePageFields>;
