import { defineField, defineType } from "sanity";

export default defineType({
  name: "home",
  title: "Home",
  type: "document",
  fields: [
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
    }),
    defineField({
      name: "seo",
      title: "Search Engine Optimization",
      type: "seo",
    }),

    defineField({
      name: "content",
      title: "Page Content",
      type: "page-content",
    }),
  ],
});
