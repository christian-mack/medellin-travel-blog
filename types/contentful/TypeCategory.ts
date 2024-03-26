import type { Asset, Entry, EntryFields, EntrySkeletonType } from "contentful";

export interface TypeCategoryFields extends EntrySkeletonType {
  title: EntryFields.Symbol;
  subTitle?: EntryFields.Symbol;
  description?: EntryFields.Text;
  image: Asset;
  slug: EntryFields.Symbol;
}

export type TypeCategory = Entry<TypeCategoryFields>;
