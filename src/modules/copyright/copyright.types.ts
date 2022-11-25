import { z } from "zod";
import { fb } from "../../helpers/zod";

export const CopyrightZod = z.object({
  _type: z.literal("copyright"),
  text: z.string().or(fb("")),
});

export type CopyrightType = z.infer<typeof CopyrightZod>;
