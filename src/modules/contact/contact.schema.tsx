import { defineField, defineType } from "sanity";

const ContactSchema = defineType({
  name: "contact",
  type: "document",
  title: "Contact",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
    }),
  ],
});

export default ContactSchema;
