import { RandomGradient } from "../components/randomGradient";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof RandomGradient> = {
  component: RandomGradient,
};

export default meta;

type Story = StoryObj<typeof RandomGradient>;

export const Default: Story = {
  args: {
    children: "Children",
  },
};