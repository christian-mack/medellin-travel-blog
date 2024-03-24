import type { Asset, Entry, EntryFields } from "contentful";

export interface TypeHeroFields {
    title: EntryFields.Symbol;
    subTitle: EntryFields.Symbol;
    description: EntryFields.Symbol;
    ctaButtonText: EntryFields.Symbol;
    image?: Asset;
}

export type TypeHero = Entry<TypeHeroFields>;
