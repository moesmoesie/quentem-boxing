import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Contact } from "./contact";

export default {
  title: "Modules/Contact",
  component: Contact,
} as ComponentMeta<typeof Contact>;

const Template: ComponentStory<typeof Contact> = (args) => <Contact {...args} />;

export const Default = Template.bind({});
Default.args = {
  email: "hello@world.com",
  title: "Contact",
};
