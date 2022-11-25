import { fb } from "../../helpers/zod";
import { z } from "zod";

export const HeaderZod = z.object({
  _type: z.literal("header"),
  logo: z.string().or(fb("")),
});

export type HeaderType = z.infer<typeof HeaderZod>;
