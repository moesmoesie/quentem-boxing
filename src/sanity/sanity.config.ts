import { deskTool } from "sanity/desk";
import PageSchema from "./schemas/page";
import HomeLandingSchema from "../modules/home-landing/home-landing.schema";
import ContactSchema from "../modules/contact/contact.schema";
import { Config } from "sanity";
import BaseConfig from "./sanity.base-config";

const config: Config = {
  ...BaseConfig,
  plugins: [deskTool()],
  basePath: "/studio",

  schema: {
    types: [PageSchema, HomeLandingSchema, ContactSchema],
  },

  document: {
    productionUrl: async (_, context) => {
      const { document } = context;

      const baseUrl =
        window.location.hostname === "localhost"
          ? process.env.NEXT_PUBLIC_DEVELOPMENT_URL!
          : process.env.NEXT_PUBLIC_PRODUCTION_URL!;

      const previewUrl = new URL(baseUrl);
      const previewSecret = process.env.NEXT_PUBLIC_PREVIEW!;
      const doc: any = document;
      previewUrl.pathname = `/api/preview`;
      previewUrl.searchParams.append(`secret`, previewSecret);
      previewUrl.searchParams.append(`slug`, doc?.slug?.current ?? "");
      return previewUrl.toString();
    },
  },
};

export default config;
