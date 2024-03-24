import type { Asset, Entry, EntryFields } from "contentful";

export interface TypeCategoryFields {
    title: EntryFields.Symbol;
    subTitle?: EntryFields.Symbol;
    description?: EntryFields.Text;
    image: Asset;
    slug: EntryFields.Symbol;
}

export type TypeCategory = Entry<TypeCategoryFields>;
