import type { Preview, Renderer } from "@storybook/vue3";
import { withThemeByClassName } from "@storybook/addon-themes";
import "../src/index.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    withThemeByClassName<Renderer>({
      themes: {
        light: "light",
        dark: "dark",
        blue: "blue"
      },
      defaultTheme: "light",
    }),
  ],
};

export default preview;
