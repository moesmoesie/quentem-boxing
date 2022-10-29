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
  ],
});

export default HomeLandingSchema;
