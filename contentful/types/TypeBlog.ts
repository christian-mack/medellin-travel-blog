import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeCategorySkeleton } from "./TypeCategory";

export interface TypeBlogFields {
    title: EntryFieldTypes.Symbol;
    slug: EntryFieldTypes.Symbol;
    summary: EntryFieldTypes.Symbol;
    content: EntryFieldTypes.RichText;
    publishDate?: EntryFieldTypes.Date;
    image: EntryFieldTypes.AssetLink;
    authorName: EntryFieldTypes.Symbol;
    category: EntryFieldTypes.EntryLink<TypeCategorySkeleton>;
}

export type TypeBlogSkeleton = EntrySkeletonType<TypeBlogFields, "blog">;
export type TypeBlog<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeBlogSkeleton, Modifiers, Locales>;
