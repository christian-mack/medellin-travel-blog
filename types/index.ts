import * as Contentful from "./contentful";

export type PageT = Contentful.TypePageFields & {
  blocksCollection: { items: any[] };
};

export type CategoryT = Contentful.TypeCategoryFields & { slug: string };
