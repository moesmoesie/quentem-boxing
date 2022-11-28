import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./schemas";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!; // "pv...."
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!; // "production | development"
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION!; // "2022-11-16"

const Config = defineConfig({
  projectId,
  dataset,
  apiVersion,
  plugins: [deskTool()],
  basePath: "/studio",
  title: "Studio",
  schema: {
    types: schemas,
  },
});

export default Config;
