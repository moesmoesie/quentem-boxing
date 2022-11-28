import { defineField, defineType } from "sanity";

export default defineType({
  name: "home-landing",
  title: "Home",
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
      name: "background",
      title: "Background",
      type: "image",
    }),

    defineField({
      name: "callToAction1",
      title: "Call To Action 1",
      type: "link",
    }),

    defineField({
      name: "callToAction2",
      title: "Call To Action 2",
      type: "link",
    }),
  ],
});
