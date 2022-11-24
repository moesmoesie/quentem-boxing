import { PageType } from "./types";
import { SpacerType } from "./modules/spacer/spacer.types";
import { Info1Type } from "./modules/info-1/info-1.types";
import { Info2Type } from "./modules/info-2/info-2.types";
import { HorizontalCardsType } from "./modules/horizontal-cards/horizontal-cards.types";
import { HeaderType } from "./modules/header/header.types";
import { HomeLandingType } from "./modules/home-landing/home-landing.types";
import { CopyrightType } from "./modules/copyright/copyright.types";
import { FooterType } from "./modules/footer/footer.types";
import { BannerType } from "./modules/banner/banner.types";
import { GalleryType } from "./modules/gallery/gallery.types";

const createSpacer = (height: string): SpacerType => ({
  _type: "spacer",
  height,
});

const Info1: Info1Type = {
  _type: "info-1",
  title: "Why you should start diet",
  body: "If you haven’t found an exact reason why you should lose weight, then the following five reasons could be a consideration:",
  image: {
    alt: "Info 1 Image",
    width: 1080,
    height: 1080,
    title: "Info 1 Image",
    src: "/images/boxer-2.jpg",
  },
  list: [
    {
      title: "Avoiding dangerous diseases",
      body: "Many people consider that diet is a diet by reducing the portion and type of food. But going on a diet is more than both points",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 32 32" > <path fill="currentColor" d="M16.71 4.294a1 1 0 00-1.416 0C12.808 6.776 10.06 8 7 8a1 1 0 00-1 1v6.002c0 6.438 3.282 10.814 9.684 12.946a.999.999 0 00.632 0C22.716 25.816 26 21.44 26 15.002V9a1 1 0 00-1-1c-3.062 0-5.81-1.22-8.29-3.706zm4.998 8a1 1 0 010 1.414l-6 6a1 1 0 01-1.416 0l-3-3a1.001 1.001 0 111.416-1.416L15 17.586l5.292-5.292a1 1 0 011.416 0z" ></path> </svg>`,
    },
    {
      title: "Build a better body",
      body: "Many people consider that diet is a diet by reducing the portion and type of food. But going on a diet is more than both points",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 32 32" > <path fill="currentColor" d="M16.71 4.294a1 1 0 00-1.416 0C12.808 6.776 10.06 8 7 8a1 1 0 00-1 1v6.002c0 6.438 3.282 10.814 9.684 12.946a.999.999 0 00.632 0C22.716 25.816 26 21.44 26 15.002V9a1 1 0 00-1-1c-3.062 0-5.81-1.22-8.29-3.706zm4.998 8a1 1 0 010 1.414l-6 6a1 1 0 01-1.416 0l-3-3a1.001 1.001 0 111.416-1.416L15 17.586l5.292-5.292a1 1 0 011.416 0z" ></path> </svg>`,
    },
    {
      title: "Make heart more healthier",
      body: "Many people consider that diet is a diet by reducing the portion and type of food. But going on a diet is more than both points",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 32 32" > <path fill="currentColor" d="M16.71 4.294a1 1 0 00-1.416 0C12.808 6.776 10.06 8 7 8a1 1 0 00-1 1v6.002c0 6.438 3.282 10.814 9.684 12.946a.999.999 0 00.632 0C22.716 25.816 26 21.44 26 15.002V9a1 1 0 00-1-1c-3.062 0-5.81-1.22-8.29-3.706zm4.998 8a1 1 0 010 1.414l-6 6a1 1 0 01-1.416 0l-3-3a1.001 1.001 0 111.416-1.416L15 17.586l5.292-5.292a1 1 0 011.416 0z" ></path> </svg>`,
    },
    {
      title: "Make the mood better",
      body: "Many people consider that diet is a diet by reducing the portion and type of food. But going on a diet is more than both points",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 32 32" > <path fill="currentColor" d="M16.71 4.294a1 1 0 00-1.416 0C12.808 6.776 10.06 8 7 8a1 1 0 00-1 1v6.002c0 6.438 3.282 10.814 9.684 12.946a.999.999 0 00.632 0C22.716 25.816 26 21.44 26 15.002V9a1 1 0 00-1-1c-3.062 0-5.81-1.22-8.29-3.706zm4.998 8a1 1 0 010 1.414l-6 6a1 1 0 01-1.416 0l-3-3a1.001 1.001 0 111.416-1.416L15 17.586l5.292-5.292a1 1 0 011.416 0z" ></path> </svg>`,
    },
    {
      title: "Better sleep quality",
      body: "Many people consider that diet is a diet by reducing the portion and type of food. But going on a diet is more than both points",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 32 32" > <path fill="currentColor" d="M16.71 4.294a1 1 0 00-1.416 0C12.808 6.776 10.06 8 7 8a1 1 0 00-1 1v6.002c0 6.438 3.282 10.814 9.684 12.946a.999.999 0 00.632 0C22.716 25.816 26 21.44 26 15.002V9a1 1 0 00-1-1c-3.062 0-5.81-1.22-8.29-3.706zm4.998 8a1 1 0 010 1.414l-6 6a1 1 0 01-1.416 0l-3-3a1.001 1.001 0 111.416-1.416L15 17.586l5.292-5.292a1 1 0 011.416 0z" ></path> </svg>`,
    },
  ],
};

const Info2: Info2Type = {
  _type: "info-2",
  title: "Benefits of our program",
  body: "Healthy lifestyle with ideal weight is currently popular in society. But people may be confused to choose the type of diet, we will help you choose the program that is best for you:",
  image: {
    alt: "Info 2 Image",
    width: 1080,
    height: 1080,
    title: "Info 2 Image",
    src: "/images/boxer-1.png",
  },
  list: [
    {
      title: "Diet without pain",
      body: "Many people consider that diet is a diet by reducing the portion and type of food. But going on a diet is more than both points",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="24" fill="none" viewBox="0 0 20 24" > <path fill="#9BBE1A" d="M10.71.294a1 1 0 00-1.416 0C6.808 2.776 4.06 4 1 4a1 1 0 00-1 1v6.002c0 6.438 3.282 10.814 9.684 12.946a.998.998 0 00.632 0C16.716 21.816 20 17.44 20 11.002V5a1 1 0 00-1-1c-3.062 0-5.81-1.22-8.29-3.706zm4.998 8a1 1 0 010 1.414l-6 6a1 1 0 01-1.416 0l-3-3a1.001 1.001 0 111.416-1.416L9 13.586l5.292-5.292a1 1 0 011.416 0z" ></path> </svg>',
    },
    {
      title: "Easy to apply",
      body: "The sampled menu is tailored to the commonly available and commonly used by you.",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="30" height="28" fill="none" viewBox="0 0 30 28" > <path fill="#9BBE1A" d="M14.049.927c.3-.921 1.603-.921 1.902 0l2.641 8.129a1 1 0 00.951.69h8.547c.969 0 1.372 1.24.588 1.81l-6.915 5.024a1 1 0 00-.363 1.118l2.641 8.128c.3.921-.755 1.688-1.539 1.118l-6.914-5.023a1 1 0 00-1.176 0l-6.915 5.023c-.783.57-1.838-.197-1.538-1.118l2.64-8.128a1 1 0 00-.363-1.119l-6.914-5.023c-.784-.57-.381-1.81.588-1.81h8.547a1 1 0 00.95-.69L14.05.927z" ></path> </svg>',
    },
    {
      title: "Easy to apply",
      body: "The sampled menu is tailored to the commonly available and commonly used by you.",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="30" height="28" fill="none" viewBox="0 0 30 28" > <path fill="#9BBE1A" d="M14.049.927c.3-.921 1.603-.921 1.902 0l2.641 8.129a1 1 0 00.951.69h8.547c.969 0 1.372 1.24.588 1.81l-6.915 5.024a1 1 0 00-.363 1.118l2.641 8.128c.3.921-.755 1.688-1.539 1.118l-6.914-5.023a1 1 0 00-1.176 0l-6.915 5.023c-.783.57-1.838-.197-1.538-1.118l2.64-8.128a1 1 0 00-.363-1.119l-6.914-5.023c-.784-.57-.381-1.81.588-1.81h8.547a1 1 0 00.95-.69L14.05.927z" ></path> </svg>',
    },
  ],
};

const horizontal: HorizontalCardsType = {
  _type: "horizontal-cards",
  title: "Why you should start diet",
  body: "If you haven't found an exact reason why you should lose weight, then the following five reasons could be a consideration:",
  cards: [
    {
      title: "Better sleep quality",
      body: "Many people consider that diet is a diet by reducing the portion and type of food. But going on a diet is more than both points",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="30" height="28" fill="none" viewBox="0 0 30 28" > <path fill="#9BBE1A" d="M14.049.927c.3-.921 1.603-.921 1.902 0l2.641 8.129a1 1 0 00.951.69h8.547c.969 0 1.372 1.24.588 1.81l-6.915 5.024a1 1 0 00-.363 1.118l2.641 8.128c.3.921-.755 1.688-1.539 1.118l-6.914-5.023a1 1 0 00-1.176 0l-6.915 5.023c-.783.57-1.838-.197-1.538-1.118l2.64-8.128a1 1 0 00-.363-1.119l-6.914-5.023c-.784-.57-.381-1.81.588-1.81h8.547a1 1 0 00.95-.69L14.05.927z" ></path> </svg>',
    },
    {
      title: "Better sleep quality",
      body: "Many people consider that diet is a diet by reducing the portion and type of food. But going on a diet is more than both points",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="30" height="28" fill="none" viewBox="0 0 30 28" > <path fill="#9BBE1A" d="M14.049.927c.3-.921 1.603-.921 1.902 0l2.641 8.129a1 1 0 00.951.69h8.547c.969 0 1.372 1.24.588 1.81l-6.915 5.024a1 1 0 00-.363 1.118l2.641 8.128c.3.921-.755 1.688-1.539 1.118l-6.914-5.023a1 1 0 00-1.176 0l-6.915 5.023c-.783.57-1.838-.197-1.538-1.118l2.64-8.128a1 1 0 00-.363-1.119l-6.914-5.023c-.784-.57-.381-1.81.588-1.81h8.547a1 1 0 00.95-.69L14.05.927z" ></path> </svg>',
    },
    {
      title: "Better sleep quality",
      body: "Many people consider that diet is a diet by reducing the portion and type of food. But going on a diet is more than both points",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="30" height="28" fill="none" viewBox="0 0 30 28" > <path fill="#9BBE1A" d="M14.049.927c.3-.921 1.603-.921 1.902 0l2.641 8.129a1 1 0 00.951.69h8.547c.969 0 1.372 1.24.588 1.81l-6.915 5.024a1 1 0 00-.363 1.118l2.641 8.128c.3.921-.755 1.688-1.539 1.118l-6.914-5.023a1 1 0 00-1.176 0l-6.915 5.023c-.783.57-1.838-.197-1.538-1.118l2.64-8.128a1 1 0 00-.363-1.119l-6.914-5.023c-.784-.57-.381-1.81.588-1.81h8.547a1 1 0 00.95-.69L14.05.927z" ></path> </svg>',
    },
    {
      title: "Better sleep quality",
      body: "Many people consider that diet is a diet by reducing the portion and type of food. But going on a diet is more than both points",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="30" height="28" fill="none" viewBox="0 0 30 28" > <path fill="#9BBE1A" d="M14.049.927c.3-.921 1.603-.921 1.902 0l2.641 8.129a1 1 0 00.951.69h8.547c.969 0 1.372 1.24.588 1.81l-6.915 5.024a1 1 0 00-.363 1.118l2.641 8.128c.3.921-.755 1.688-1.539 1.118l-6.914-5.023a1 1 0 00-1.176 0l-6.915 5.023c-.783.57-1.838-.197-1.538-1.118l2.64-8.128a1 1 0 00-.363-1.119l-6.914-5.023c-.784-.57-.381-1.81.588-1.81h8.547a1 1 0 00.95-.69L14.05.927z" ></path> </svg>',
    },
  ],
};

const header: HeaderType = {
  _type: "header",
  logo: "Quentem",
};

const gallery: GalleryType = {
  images: [
    {
      image: {
        alt: "image",
        height: 500,
        width: 500,
        src: "/images/background-2.png",
        title: "image",
      },
      col: "3",
      row: "2",
    },
    {
      image: {
        alt: "image",
        height: 500,
        width: 500,
        src: "/images/boxer-1.png",
        title: "image",
      },
      col: "2",
      row: "2",
    },
    {
      image: {
        alt: "image",
        height: 500,
        width: 500,
        src: "/images/boxer-4.jpg",
        title: "image",
      },
      col: "2",
      row: "1",
    },
    {
      image: {
        alt: "image",
        height: 500,
        width: 500,
        src: "/images/background-2.png",
        title: "image",
      },
      col: "2",
      row: "1",
    },
    {
      image: {
        alt: "image",
        height: 500,
        width: 500,
        src: "/images/background-2.png",
        title: "image",
      },
      col: "2",
      row: "1",
    },
    {
      image: {
        alt: "image",
        height: 500,
        width: 500,
        src: "/images/boxer-3.jpg",
        title: "image",
      },
      col: "3",
      row: "1",
    },
    {
      image: {
        alt: "image",
        height: 500,
        width: 500,
        src: "/images/boxer-1.png",
        title: "image",
      },
      col: "2",
      row: "1",
    },
  ],
  _type: "gallery",
};

const Homelanding: HomeLandingType = {
  _type: "home-landing",
  title: "QUENTEM MAYWEATHER",
  body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquam tincidunt, nisl elit aliquam massa, eget aliquam nisl nunc eu augue. Sed euismod, nunc ut aliquam tincidunt, nisl elit aliquam massa, eget aliquam nisl nunc eu augue.",
  background: {
    alt: "Home Landing Background",
    width: 1080,
    height: 1080,
    title: "Home Landing Background",
    src: "/images/background.png",
  },
  callToAction1: {
    title: "Watch Highlights",
    href: "/",
  },
  callToAction2: {
    title: "Contact",
    href: "/",
  },
};

const Footer: FooterType = {
  _type: "footer",
  title: "Quentem",
  body: "Quentem is a digital health company that provides a healthy diet plan for you to achieve your body goals",
  links: [
    {
      title: "Facebook",
      href: "https://www.facebook.com",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" > <path fill="#FEFEFE" d="M20.9 2H3.1A1.1 1.1 0 002 3.1v17.8A1.1 1.1 0 003.1 22h9.58v-7.75h-2.6v-3h2.6V9a3.64 3.64 0 013.88-4 20.26 20.26 0 012.33.12v2.7H17.3c-1.26 0-1.5.6-1.5 1.47v1.93h3l-.39 3H15.8V22h5.1a1.102 1.102 0 001.1-1.1V3.1A1.101 1.101 0 0020.9 2z" ></path> </svg>',
    },
    {
      title: "Instagram",
      href: "https://www.facebook.com",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" > <path fill="#FEFEFE" d="M12 7a5 5 0 100 10 5 5 0 000-10zm0 8a3 3 0 110-5.999A3 3 0 0112 15zm5-9a1 1 0 100 2 1 1 0 000-2zm4.94 2.24a7.51 7.51 0 00-.48-2.5 5.56 5.56 0 00-3.2-3.2 7.51 7.51 0 00-2.5-.48C14.79 2 14.47 2 12 2c-2.47 0-2.79 0-3.76.06a7.51 7.51 0 00-2.5.48 5.56 5.56 0 00-3.2 3.2 7.51 7.51 0 00-.48 2.5C2 9.22 2 9.54 2 12s0 2.78.06 3.76c.017.855.179 1.7.48 2.5a5.56 5.56 0 003.2 3.2 7.51 7.51 0 002.5.48c1 0 1.29.06 3.76.06 2.47 0 2.79 0 3.76-.06a7.51 7.51 0 002.5-.48 5.56 5.56 0 003.2-3.2 7.51 7.51 0 00.48-2.5c0-1 .06-1.3.06-3.76s0-2.78-.06-3.76zm-2 7.43a6 6 0 01-.35 1.86 3.4 3.4 0 01-.82 1.25 3.26 3.26 0 01-1.25.81 5.75 5.75 0 01-1.87.36c-.94 0-1.23.05-3.66.05H8.34a6 6 0 01-1.87-.35 3.4 3.4 0 01-1.25-.82 3.26 3.26 0 01-.81-1.25 5.74 5.74 0 01-.36-1.86v-3.67-3.67a5.86 5.86 0 01.36-1.87 3.3 3.3 0 01.81-1.24 3.26 3.26 0 011.25-.81 5.75 5.75 0 011.87-.36C9.28 4 9.57 4 12 4h3.66a5.87 5.87 0 011.88.36 3.3 3.3 0 011.24.81c.363.349.64.776.81 1.25A5.74 5.74 0 0120 8.33c0 1 .05 1.25.05 3.67S20 14.71 20 15.67h-.06z" ></path> </svg>',
    },
  ],
};

const Banner: BannerType = {
  _type: "banner",
  callToAction: "Get Started",
  title: "Join Dietin For Free",
  subtitle: "Start your free trial today.",
};

const Copyright: CopyrightType = {
  _type: "copyright",
  text: "© 2021 Quentem. All rights reserved.",
};

export const data: PageType = {
  title: "Quentem",
  content: [header, Homelanding, gallery, createSpacer("150px"), Info2, createSpacer("120px"), horizontal, createSpacer("150px"), createSpacer("150px"), Banner, createSpacer("100px"), Info1, createSpacer("100px"), Copyright],
};
