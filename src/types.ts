import { ContactType } from "./modules/contact/contact.types";
import { HeaderType } from "./modules/header/header.types";
import { HomeLandingType } from "./modules/home-landing/home-landing.types";
import { Info1Type } from "./modules/info-1/info-1.types";
import { SpacerType } from "./modules/spacer/spacer.types";
import { Info2Type } from "./modules/info-2/info-2.types";
import { BannerType } from "./modules/banner/banner.types";
import { HorizontalCardsType } from "./modules/horizontal-cards/horizontal-cards.types";
import { CopyrightType } from "./modules/copyright/copyright.types";
import { FooterType } from "./modules/footer/footer.types";

export type ContentType = ContactType | HeaderType | HomeLandingType | Info1Type | SpacerType | Info2Type | BannerType | HorizontalCardsType | CopyrightType | FooterType;

export interface ImageType {
  src: string;
  width: number;
  height: number;
  alt: string;
  title: string;
}

export interface PageType {
  title: string;
  content?: ContentType[];
}

export type IconType = string | undefined;
