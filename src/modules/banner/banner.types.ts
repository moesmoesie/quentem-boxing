import { z } from "zod";
import { fb } from "../../helpers/zod";

export const BannerZod = z.object({
  _type: z.literal("banner"),
  title: z.string().or(fb("")),
  subtitle: z.string().or(fb("")),
  callToAction: z.string().or(fb("")),
});

export type BannerType = z.infer<typeof BannerZod>;
