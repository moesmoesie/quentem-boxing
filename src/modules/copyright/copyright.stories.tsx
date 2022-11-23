import { ComponentStory, ComponentMeta } from "@storybook/react";
import Component from "./copyright";

export default {
  title: "Modules/Copyright",
  component: Component,
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => <Component {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: "@2021 Dietin. All rights reserved",
};
