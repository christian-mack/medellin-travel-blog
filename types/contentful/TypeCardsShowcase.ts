import type { Entry, EntryFields } from "contentful";
import type { TypeCardFields } from "./TypeCard";

export interface TypeCardsShowcaseFields {
    title: EntryFields.Symbol;
    subTitle: EntryFields.Symbol;
    description: EntryFields.Symbol;
    cards: Entry<TypeCardFields>[];
}

export type TypeCardsShowcase = Entry<TypeCardsShowcaseFields>;
