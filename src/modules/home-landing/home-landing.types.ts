import { ImageTypeZod } from "../../types";
import { z } from "zod";
import { fb } from "../../helpers/zod";

export const HomeLandingZod = z.object({
  _type: z.literal("home-landing"),
  title: z.string().or(fb("Title")),
  body: z.string().or(fb("Body")),
  background: ImageTypeZod,
  callToAction1: z
    .object({
      text: z.string().or(fb("Title")),
      href: z.string().or(fb("#")),
    })
    .or(fb(null)),
  callToAction2: z
    .object({
      text: z.string().or(fb("Title")),
      href: z.string().or(fb("#")),
    })
    .or(fb(null)),
});

export type HomeLandingType = z.infer<typeof HomeLandingZod>;
