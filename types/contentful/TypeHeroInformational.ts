import type { Asset, Entry, EntryFields } from "contentful";

export interface TypeHeroInformationalFields {
    title: EntryFields.Symbol;
    subTitle: EntryFields.Symbol;
    description: EntryFields.Symbol;
    text: EntryFields.Text;
    image: Asset;
}

export type TypeHeroInformational = Entry<TypeHeroInformationalFields>;
