import { defineType, defineField } from "sanity";

export default defineType({
  name: "copyright",
  title: "Copyright",
  type: "object",
  fields: [
    defineField({
      name: "text",
      title: "text",
      type: "string",
    }),
  ],
});
