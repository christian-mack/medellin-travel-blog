import type { Asset, Entry, EntryFields } from "contentful";

export interface TypeCardFields {
    title: EntryFields.Symbol;
    description: EntryFields.Symbol;
    image: Asset;
}

export type TypeCard = Entry<TypeCardFields>;
