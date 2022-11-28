import { defineType } from "sanity";

export default defineType({
  name: "testimonial",
  title: "Testimonial",
  type: "object",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },

    {
      name: "body",
      title: "Body",
      type: "text",
    },
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
    },
  ],
});
