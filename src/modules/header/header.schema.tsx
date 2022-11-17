import { defineField, defineType } from "sanity";

const HeaderSchema = defineType({
  name: "header",
  type: "object",
  title: "Header",
  fields: [
    defineField({
      name: "logo",
      title: "Logo",
      type: "string",
    }),
  ],
});

export default HeaderSchema;
