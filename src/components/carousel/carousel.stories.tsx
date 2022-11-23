import { ComponentStory, ComponentMeta } from "@storybook/react";

import Component from "./carousel";

export default {
  title: "Components/Carousel",
  component: Component,
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => (
  <Component {...args}>
    {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
      <li key={i} className="h-[100px] w-[100px] bg-primary"></li>
    ))}
  </Component>
);

export const Default = Template.bind({});
Default.args = {
  gap: "10px",
};
