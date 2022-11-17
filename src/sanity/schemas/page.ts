import { defineType, defineField } from "sanity";

export default defineType({
  name: "page",
  type: "document",
  title: "Page",
  fields: [
    defineField({
      name: "slug",
      type: "slug",
      title: "Slug",
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
    defineField({
      name: "keywords",
      title: "Keywords",
      type: "array",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
    }),
    defineField({
      name: "modules",
      title: "Modules",
      type: "array",
      of: [{ type: "home-landing" }, { type: "contact" }, { type: "header" }],
    }),
  ],
});
