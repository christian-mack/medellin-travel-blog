import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeBlogSkeleton } from "./TypeBlog";
import type { TypeContactFormSkeleton } from "./TypeContactForm";

export interface TypePageFields {
    title: EntryFieldTypes.Symbol;
    slug: EntryFieldTypes.Symbol;
    blocks: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeBlogSkeleton | TypeContactFormSkeleton>>;
    type: EntryFieldTypes.Symbol<"Blog" | "General">;
}

export type TypePageSkeleton = EntrySkeletonType<TypePageFields, "page">;
export type TypePage<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypePageSkeleton, Modifiers, Locales>;
