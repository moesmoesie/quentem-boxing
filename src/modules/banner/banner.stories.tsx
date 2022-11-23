import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Banner as Component } from "./banner";

export default {
  title: "Modules/Banner",
  component: Component,
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => <Component {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "Join Dietin For Free",
  subtitle: "Start your free trial today",
  callToAction: "Get Started",
};
