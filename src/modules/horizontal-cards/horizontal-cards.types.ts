import { z } from "zod";
import { IconTypeZod } from "../../types";
import { fb } from "../../helpers/zod";

const HorizontalCardZod = z.object({
  title: z.string().or(fb("Title")),
  body: z.string().or(fb("Body")),
  icon: IconTypeZod,
});

export const HorizontalCardsZod = z.object({
  _type: z.literal("horizontal-cards"),
  title: z.string().or(fb("Title")),
  body: z.string().or(fb("Body")),
  cards: z.array(HorizontalCardZod).or(fb(undefined)),
});

export type HorizontalCardsType = z.infer<typeof HorizontalCardsZod>;
