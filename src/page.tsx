import Head from "next/head";
import { Banner } from "./modules/banner";
import { Contact } from "./modules/contact";
import { Header } from "./modules/header";
import { HomeLanding } from "./modules/home-landing";
import { HorizontalCards } from "./modules/horizontal-cards";
import { Info1 } from "./modules/info-1";
import { Footer } from "./modules/footer";
import Info2 from "./modules/info-2/info-2";
import Spacer from "./modules/spacer/spacer";
import Copyright from "./modules/copyright/copyright";
import { Gallery } from "./modules/gallery";
import { Testimonial } from "./modules/testimonial";
import { z } from "zod";
import { BannerZod } from "./modules/banner/banner.types";
import { ContactZod } from "./modules/contact/contact.types";
import { CopyrightZod } from "./modules/copyright/copyright.types";
import { FooterZod } from "./modules/footer/footer.types";
import { GalleryZod } from "./modules/gallery/gallery.types";
import { HeaderZod } from "./modules/header/header.types";
import { HomeLandingZod } from "./modules/home-landing/home-landing.types";
import { HorizontalCardsZod } from "./modules/horizontal-cards/horizontal-cards.types";
import { Info1Zod } from "./modules/info-1/info-1.types";
import { Info2Zod } from "./modules/info-2/info-2.types";
import { SpacerZod } from "./modules/spacer/spacer.types";
import { TestimonialZod } from "./modules/testimonial/testimonial.types";

export const ContentZod = z.union([FooterZod, TestimonialZod, GalleryZod, CopyrightZod, ContactZod, HeaderZod, HomeLandingZod, Info1Zod, SpacerZod, Info2Zod, BannerZod, HorizontalCardsZod]).or(z.any());

export const PageZod = z.object({
  content: z.array(ContentZod),
});

export type PageType = z.infer<typeof PageZod>;

export const Page: React.FC<PageType> = (props) => {
  return (
    <>
      <Head>
        <title>Quentem</title>
        <meta name="description" content="Description" />
        <meta name="keywords" content="Boxing, Personal Trainer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {props?.content?.map((el, index) => {
          switch (el._type) {
            case "header":
              return <Header key={index} {...el} />;
            case "info-1":
              return <Info1 key={index} {...el} />;
            case "contact":
              return <Contact key={index} {...el} />;
            case "spacer":
              return <Spacer key={index} {...el} />;
            case "home-landing":
              return <HomeLanding key={index} {...el} />;
            case "info-1":
              return <Info1 key={index} {...el} />;
            case "info-2":
              return <Info2 key={index} {...el} />;
            case "banner":
              return <Banner key={index} {...el} />;
            case "horizontal-cards":
              return <HorizontalCards key={index} {...el} />;
            case "copyright":
              return <Copyright key={index} {...el} />;
            case "footer":
              return <Footer key={index} {...el} />;
            case "gallery":
              return <Gallery key={index} {...el} />;
            case "testimonial":
              return <Testimonial key={index} {...el} />;
            case "contact":
              return <Contact key={index} {...el} />;
            default:
              return <p>Unknown Module Type</p>;
          }
        })}
      </main>
    </>
  );
};
