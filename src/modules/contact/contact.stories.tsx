import { ComponentStory, ComponentMeta } from "@storybook/react";
import getPlaceholderImage from "../../helpers/getPlaceholderImage";

import { Contact } from "./contact";

export default {
  title: "Modules/Contact",
  component: Contact,
} as ComponentMeta<typeof Contact>;

const Template: ComponentStory<typeof Contact> = (args) => <Contact {...args} />;

export const Default = Template.bind({});
Default.args = {
  email: "hello@world.com",
  title: "Wanna join & get fit?",
  body: "We’ll keep you updated on the things you need to know about Gym. Nothing more, nothing less.",
  phone: "123456789",
  whatsapp: "123456789",
  image: getPlaceholderImage(600, 400, "5A5A5A", "5A5A5A"),
};
