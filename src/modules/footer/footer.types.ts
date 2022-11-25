import { z } from "zod";
import { IconTypeZod } from "../../types";
import { fb } from "../../helpers/zod";

export const FooterZod = z.object({
  _type: z.literal("footer"),
  title: z.string().or(fb("Title")),
  body: z.string().or(fb("Body")),
  links: z
    .array(
      z.object({
        icon: IconTypeZod,
        title: z.string().or(fb("Title")),
        href: z.string().or(fb("#")),
      })
    )
    .or(fb(undefined)),
});

export type FooterType = z.infer<typeof FooterZod>;
