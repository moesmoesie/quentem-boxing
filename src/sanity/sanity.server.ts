import { createClient } from "next-sanity";
import { baseConfig } from "./sanity.config";

// Set up the client for fetching data in the getProps page functions
export const sanityClient = createClient(baseConfig);

// Set up a preview client with serverless authentication for drafts
export const previewClient = createClient({
  ...baseConfig,
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
});

// Helper function for easily switching between normal client and preview client
export const getClient = (usePreview: boolean | undefined) =>
  usePreview ? previewClient : sanityClient;
