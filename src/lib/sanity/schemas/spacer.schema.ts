// import { z } from "zod";
// import { fb } from "../../helpers/zod";

// export const SpacerZod = z.object({
//   _type: z.literal("spacer"),
//   height: z.string().or(fb(0)),
// });

// export type SpacerType = z.infer<typeof SpacerZod>;

import { defineField, defineType } from "sanity";

export default defineType({
  name: "spacer",
  title: "Spacer",
  type: "object",
  fields: [
    defineField({
      name: "height",
      title: "Height",
      type: "string",
    }),
  ],
});
