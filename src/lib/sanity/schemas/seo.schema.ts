import { defineField, defineType } from "sanity";

export default defineType({
  name: "seo",
  title: "Serach Engine Optimization",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "string",
    }),
    defineField({
      name: "keywords",
      title: "Keywords",
      type: "array",
      of: [
        {
          type: "string",
        },
      ],
    }),
  ],
});
