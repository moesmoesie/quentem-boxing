import { ComponentStory, ComponentMeta } from "@storybook/react";

import { HomeLanding } from "./home-landing";

export default {
  title: "Modules/Home Landing",
  component: HomeLanding,
} as ComponentMeta<typeof HomeLanding>;

const Template: ComponentStory<typeof HomeLanding> = (args) => <HomeLanding {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "Hello World!",
};
