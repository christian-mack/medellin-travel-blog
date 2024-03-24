import type { Entry, EntryFields } from "contentful";

export interface TypeContactFormFields {
    title: EntryFields.Symbol;
    subTitle: EntryFields.Symbol;
}

export type TypeContactForm = Entry<TypeContactFormFields>;
