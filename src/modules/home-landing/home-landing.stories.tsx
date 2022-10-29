import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Component from "./home-landing";

export default {
  title: "Modules/Home Landing",
  component: Component,
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => (
  <Component {...args} />
);

export const Default = Template.bind({});
Default.args = {
  title: "Hello World!",
};
