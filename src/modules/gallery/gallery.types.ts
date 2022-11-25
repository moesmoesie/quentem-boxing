import { z } from "zod";
import { ImageTypeZod } from "../../types";
import { fb } from "../../helpers/zod";

export const GalleryZod = z.object({
  _type: z.literal("gallery"),
  images: z.array(
    z.object({
      row: z.string().or(fb("1")),
      col: z.string().or(fb("1")),
      image: ImageTypeZod,
    })
  ),
});

export type GalleryType = z.infer<typeof GalleryZod>;
