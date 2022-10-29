import { deskTool } from "sanity/desk";
import PageSchema from "./schemas/page";
import HomeLandingSchema from "../modules/home-landing/home-landing.schema";
import ContactSchema from "../modules/contact/contact.schema";
import { Config } from "sanity";

export const baseConfig = {
  name: process.env.NEXT_PUBLIC_SANITY_NAME!,
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: "2022-10-10",
  useCdn: false,
};

const config: Config = {
  ...baseConfig,
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
