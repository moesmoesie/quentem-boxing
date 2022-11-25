import { z } from "zod";
import { ImageTypeZod } from "../../types";
import { fb } from "../../helpers/zod";

export const ContactZod = z.object({
  _type: z.literal("contact"),
  title: z.string().or(fb("Title")),
  email: z.string().or(fb("Email")),
  whatsapp: z.string().or(fb("Whatsapp")),
  phone: z.string().or(fb("Phone")),
  body: z.string().or(fb("Body")),
  image: ImageTypeZod,
});

export type ContactType = z.infer<typeof ContactZod>;
