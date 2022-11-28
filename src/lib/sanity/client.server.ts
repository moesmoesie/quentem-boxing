import { createClient, groq } from "next-sanity";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID; // "pv...."
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET; // "production | development"
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION; // "2022-11-16"
const token = process.env.SANITY_API_TOKEN; // "sk..."

const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
});

const previewClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  token,
});

export const getClient = (usePreview: boolean | undefined) => (usePreview ? previewClient : client);
