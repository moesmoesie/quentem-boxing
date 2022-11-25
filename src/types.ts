import { z } from "zod";
import { fb } from "./helpers/zod";

export const ImageTypeZod = z
  .object({
    src: z.string().or(fb("")),
    width: z.number().or(fb(100)),
    height: z.number().or(fb(100)),
    alt: z.string().or(fb("Alt")),
    title: z.string().or(fb("Title")),
  })
  .or(fb(undefined));

export const IconTypeZod = z.string().or(fb(undefined));

export type ImageType = z.infer<typeof ImageTypeZod>;

export type IconType = z.infer<typeof IconTypeZod>;
