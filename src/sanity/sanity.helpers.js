import { createPreviewSubscriptionHook } from "next-sanity";
import BaseConfig from "./sanity.base-config";

export const usePreviewSubscription = createPreviewSubscriptionHook(BaseConfig);

export function filterDataToSingleItem(data, preview) {
  if (!Array.isArray(data)) {
    return data;
  }

  if (data.length === 1) {
    return data[0];
  }

  if (preview) {
    return data.find((item) => item._id.startsWith(`drafts.`)) || data[0];
  }

  return data[0];
}

export const formatSlugData = (data) => {
  return data.map(({ params }) => {
    return {
      params: { slug: params.slug.split("/").filter((el) => el) },
    };
  });
};
