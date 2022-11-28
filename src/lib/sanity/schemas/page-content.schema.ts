import { defineField, defineType } from "sanity";

export default defineType({
  name: "page-content",
  title: "Page Content",
  type: "array",
  of: [
    {
      type: "home-landing",
    },
    {
      type: "spacer",
    },
    {
      type: "gallery",
    },
    {
      type: "info-2",
    },
    {
      type: "info-1",
    },
    {
      type: "testimonial",
    },
    {
      type: "contact",
    },
    {
      type: "copyright",
    },
  ],
});
