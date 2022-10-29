import { z } from "zod";

export const HomeLandingZod = z.object({
  _id: z.string(),
  _type: z.literal("home-landing"),
  title: z.string(),
});

type HomeLandingType = z.infer<typeof HomeLandingZod>;
export default HomeLandingType;
