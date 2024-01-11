import type { Preview } from '@storybook/react';
import '../src/styles/global.scss';
import { sen } from "../src/lib/fonts";
import * as React from "react";


const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    decorators: [
      (Story) => (
        <div className={`${sen.variable}`}>
          <Story />
        </div>
      ),
    ],
  },
};

export default preview;
