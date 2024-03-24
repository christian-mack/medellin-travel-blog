import type { Entry, EntryFields } from "contentful";

export interface TypeHeroCarouselFields {
    title: EntryFields.Symbol;
    featuredBlogPosts: Entry<Record<string, any>>[];
}

export type TypeHeroCarousel = Entry<TypeHeroCarouselFields>;
