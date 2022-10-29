import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Component from "./button";

export default {
  title: "Components/Button",
  component: Component,
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => (
  <Component {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: "Hello World!",
};
