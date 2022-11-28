import { defineField, defineType } from "sanity";

export default defineType({
  name: "header",
  title: "Header",
  type: "object",
  fields: [
    defineField({
      name: "logo",
      title: "Logo",
      type: "string",
    }),
  ],
});
