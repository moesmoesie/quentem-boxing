import { z } from "zod";

export const ImageZod = z.object({
  url: z.string(),
  metadata: z.object({
    lqip: z.string(),
    dimensions: z.object({
      width: z.number(),
      height: z.number(),
    }),
  }),
});
