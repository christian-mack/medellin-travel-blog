/**
 *
 * This component is *essential* for the dynamic pages.
 * Each page has a 'blocksCollection' that can consist of several different components.
 * This function renders the component based on it's '__typename' property
 *
 * @param type string
 * @returns react component
 */

import Accordion from "@/components/contentful/accordion";
import CardsShowcase from "@/components/contentful/cards-showcase";
import ContactUsForm from "@/components/contentful/contact-form";
import Hero from "@/components/contentful/hero";
import HeroCarousel from "@/components/contentful/hero-carousel";
import HeroInformational from "@/components/contentful/hero-informational";

interface renderComponentByTypenameProps {
  type: any;
  itemId: any;
  slug: any;
}

export const renderComponentByTypename = ({
  type,
  itemId,
  slug,
}: renderComponentByTypenameProps) => {
  switch (type) {
    case "Hero":
      return <Hero itemId={itemId} slug={slug} />;
    case "HeroCarousel":
      return <HeroCarousel itemId={itemId} slug={slug} />;
    case "HeroInformational":
      return <HeroInformational itemId={itemId} slug={slug} />;
    case "CardsShowcase":
      return <CardsShowcase itemId={itemId} slug={slug} />;
    case "ContactForm":
      return <ContactUsForm itemId={itemId} slug={slug} />;
    case "Accordion":
      return <Accordion itemId={itemId} slug={slug} />;
    default:
      return <></>;
  }
};
