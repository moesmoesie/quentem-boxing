import { z } from "zod";

export const ContactZod = z.object({
  _type: z.literal("contact"),
  _id: z.string(),
  title: z.string().nullable(),
  email: z.string(),
});

type ContactType = z.infer<typeof ContactZod>;
export default ContactType;
