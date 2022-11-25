import { z } from "zod";
import { fb } from "../../helpers/zod";
import { ImageTypeZod } from "../../types";
import { IconTypeZod } from "../../types";

const Info1ListItemZod = z.object({
  title: z.string().or(fb("Title")),
  body: z.string().or(fb("Body")),
  icon: IconTypeZod,
});

export const Info1Zod = z.object({
  _type: z.literal("info-1"),
  title: z.string().or(fb("Title")),
  body: z.string().or(fb("Body")),
  image: ImageTypeZod,
  list: z.array(Info1ListItemZod).or(fb(undefined)),
});

export type Info1Type = z.infer<typeof Info1Zod>;
