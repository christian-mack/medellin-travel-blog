import type { Entry, EntryFields } from "contentful";

export interface TypeAccordionCardFields {
    title: EntryFields.Symbol;
    description?: EntryFields.Text;
}

export type TypeAccordionCard = Entry<TypeAccordionCardFields>;
