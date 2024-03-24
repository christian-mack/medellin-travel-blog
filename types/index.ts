import * as Contentful from "./contentful";

export type PageT = Contentful.TypePageFields & {
  blocksCollection: { items: any[] };
};
