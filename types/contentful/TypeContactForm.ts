import type { Entry, EntryFields, EntrySkeletonType } from "contentful";

export interface TypeContactFormFields extends EntrySkeletonType {
  title: EntryFields.Symbol;
  subTitle: EntryFields.Symbol;
}

export type TypeContactForm = Entry<TypeContactFormFields>;
