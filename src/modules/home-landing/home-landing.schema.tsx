import { defineField, defineType } from "sanity";

const HomeLandingSchema = defineType({
  name: "home-landing",
  type: "document",
  title: "Home Landing",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "subtitle",
      title: "Subtitle",
      type: "string",
    }),
    defineField({
      name: "body",
      title: "Body",
      type: "text",
    }),
    defineField({
      name: "background",
      title: "Background",
      type: "image",
    }),
  ],
});

export default HomeLandingSchema;
