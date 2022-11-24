import { ComponentStory, ComponentMeta } from "@storybook/react";
import getPlaceholderImage from "../../helpers/getPlaceholderImage";

import { Gallery as Component } from "./gallery";

export default {
  title: "Modules/Gallery",
  component: Component,
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => <Component {...args} />;

export const Default = Template.bind({});
Default.args = {
  images: [
    {
      image: getPlaceholderImage(600, 400, "5A5A5A", "5A5A5A"),
      col: "3",
      row: "2",
    },
    {
      image: getPlaceholderImage(600, 400, "5A5A5A", "5A5A5A"),
      col: "2",
      row: "2",
    },
    {
      image: getPlaceholderImage(600, 400, "5A5A5A", "5A5A5A"),
      col: "2",
      row: "1",
    },
    {
      image: getPlaceholderImage(600, 400, "5A5A5A", "5A5A5A"),
      col: "2",
      row: "1",
    },
    {
      image: getPlaceholderImage(600, 400, "5A5A5A", "5A5A5A"),
      col: "2",
      row: "1",
    },
    {
      image: getPlaceholderImage(600, 400, "5A5A5A", "5A5A5A"),
      col: "3",
      row: "1",
    },
    {
      image: getPlaceholderImage(600, 400, "5A5A5A", "5A5A5A"),
      col: "2",
      row: "1",
    },
  ],
};
