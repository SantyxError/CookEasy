import { Meta, StoryObj } from "@storybook/react";
import Text from "./Text";

const meta: Meta<typeof Text> = {
  title: "atoms/Text",
  component: Text,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Primary: Story = {
  args: {
    children: "HTML",
    as: "span",
    size: "5",
    align: "center",
    fontWeight: "normal",
    fontStyle: "normal",
    color: "primary",
  },
};

export const Heading: Story = {
  args: {
    children: "This is an H1 Heading",
    as: "h1",
    size: "10",
    align: "center",
    fontWeight: "bold",
    color: "secondary",
  },
};

export const Paragraph: Story = {
  args: {
    children: "Lorem ipsum dolor sit amet.",
    as: "p",
    size: "7",
    align: "justify",
    fontWeight: "normal",
    fontStyle: "italic",
    color: "grey",
  },
};
