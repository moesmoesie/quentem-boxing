import { z } from "zod";

const Contact: React.FC<ContactType> = (props) => {
  return <section>{props.email}</section>;
};

export default Contact;

export const ContactZod = z.object({
  _type: z.literal("contact"),
  _id: z.string(),
  title: z.string().nullable(),
  email: z.string(),
});

export type ContactType = z.infer<typeof ContactZod>;
