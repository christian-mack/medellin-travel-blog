import type { Entry, EntryFields } from "contentful";
import type { TypeAccordionCardFields } from "./TypeAccordionCard";

export interface TypeAccordionFields {
    title: EntryFields.Symbol;
    subTitle: EntryFields.Symbol;
    description?: EntryFields.Symbol;
    accordionCards: Entry<TypeAccordionCardFields>[];
}

export type TypeAccordion = Entry<TypeAccordionFields>;
