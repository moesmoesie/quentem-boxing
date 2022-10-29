import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Component from "./header";

export default {
  title: "Modules/Contact",
  component: Component,
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => (
  <Component {...args} />
);

export const Default = Template.bind({});
Default.args = {};
