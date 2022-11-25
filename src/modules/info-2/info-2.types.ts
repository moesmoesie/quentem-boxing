import { z } from "zod";
import { ImageTypeZod } from "../../types";
import { IconTypeZod } from "../../types";
import { fb } from "../../helpers/zod";

export const Info2ListItemZod = z.object({
  title: z.string().or(fb("Title")),
  body: z.string().or(fb("Body")),
  icon: IconTypeZod,
});

export const Info2Zod = z.object({
  _type: z.literal("info-2"),
  title: z.string().or(fb("Title")),
  body: z.string().or(fb("Body")),
  image: ImageTypeZod,
  list: z.array(Info2ListItemZod).or(fb(undefined)),
});

export type Info2Type = z.infer<typeof Info2Zod>;
export type Info2ListItemType = z.infer<typeof Info2ListItemZod>;
