import { z } from "zod";
import { fb } from "../../helpers/zod";
import { ImageTypeZod } from "../../types";

export const TestimonialZod = z.object({
  _type: z.literal("testimonial"),
  name: z.string().or(fb("Name")),
  title: z.string().or(fb("Title")),
  body: z.string().or(fb("Body")),
  image: ImageTypeZod,
});

export type TestimonialType = z.infer<typeof TestimonialZod>;
