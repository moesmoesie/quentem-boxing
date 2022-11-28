import { defineType, defineField } from "sanity";

export default defineType({
  name: "info-1",
  title: "Info 1",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "body",
      title: "Body",
      type: "text",
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
    }),
    defineField({
      name: "list",
      title: "List",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "title",
              title: "Title",
              type: "string",
            }),
            defineField({
              name: "body",
              title: "Body",
              type: "text",
            }),
            defineField({
              name: "icon",
              title: "Icon",
              type: "text",
            }),
          ],
        },
      ],
    }),
  ],
});
