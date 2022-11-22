import { ComponentStory, ComponentMeta } from "@storybook/react";
import getPlaceholderImage from "../../helpers/getPlaceholderImage";

import Component from "./info-1";

export default {
  title: "Modules/Info 1",
  component: Component,
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => <Component {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "Why you should start diet",
  image: getPlaceholderImage(400, 400, "000000", "ffffff"),
  body: "If you haven’t found an exact reason why you should lose weight, then the following five reasons could be a consideration:",
  list: [
    {
      title: "Avoiding dangerous diseases",
      body: "Many people consider that diet is a diet by reducing the portion and type of food. But going on a diet is more than both points",
      icon: getPlaceholderImage(400, 400, "000000", "ffffff", "P"),
    },
    {
      title: "Build a better body",
      body: "Many people consider that diet is a diet by reducing the portion and type of food. But going on a diet is more than both points",
      icon: getPlaceholderImage(400, 400, "000000", "ffffff", "P"),
    },
    {
      title: "Better sleep quality",
      body: "Many people consider that diet is a diet by reducing the portion and type of food. But going on a diet is more than both points",
      icon: getPlaceholderImage(400, 400, "000000", "ffffff", "P"),
    },
    {
      title: "Make heart more healthier",
      body: "Many people consider that diet is a diet by reducing the portion and type of food. But going on a diet is more than both points",
      icon: getPlaceholderImage(400, 400, "000000", "ffffff", "P"),
    },
    {
      title: "Make the mood better",
      body: "Many people consider that diet is a diet by reducing the portion and type of food. But going on a diet is more than both points",
      icon: getPlaceholderImage(400, 400, "000000", "ffffff", "P"),
    },
  ],
};
