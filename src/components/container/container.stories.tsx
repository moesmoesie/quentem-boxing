import { ComponentStory, ComponentMeta } from "@storybook/react";

import Component from "./container";

export default {
  title: "Components/Container",
  component: Component,
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => (
  <Component {...args}>
    <div className="w-full h-[300px] bg-primary" />
  </Component>
);

export const Default = Template.bind({});
Default.args = {};
