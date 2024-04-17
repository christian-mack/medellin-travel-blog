import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeContactFormFields {
    title: EntryFieldTypes.Symbol;
    subTitle: EntryFieldTypes.Symbol;
}

export type TypeContactFormSkeleton = EntrySkeletonType<TypeContactFormFields, "contactForm">;
export type TypeContactForm<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeContactFormSkeleton, Modifiers, Locales>;
