import { defineField, defineType } from "sanity";

export default defineType({
  name: "gallery",
  title: "Gallery",
  type: "object",
  fields: [
    defineField({
      name: "images",
      title: "Images",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "image",
              title: "Image",
              type: "image",
            }),
            defineField({
              name: "row",
              title: "Row Span",
              type: "string",
            }),
            defineField({
              name: "col",
              title: "Column",
              type: "string",
            }),
          ],
        },
      ],
    }),
  ],
});
