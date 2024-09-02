This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


# Container Component Documentation

## Overview

The Container Component, rendered through the `Render` component, is designed to organize and display a collection of elements either horizontally or vertically. It is highly customizable, allowing you to define both the layout and content dynamically. This component is ideal for creating structured and interactive UI sections, such as headers, content sections, or grouped items, with support for managing active elements and interaction handlers.

## Features

- **Orientation**: The component supports horizontal and vertical layouts.
- **Dynamic Content**: It can render content based on the provided configuration, allowing for flexible content management.
- **Interactive Elements**: The component supports active states for elements, enabling interactivity.
- **Customization**: Individual elements can be styled with custom font sizes, weights, colors, and margins.

## Usage

### Configuration

The component requires two main configurations: `layout` and `content`.

- **Layout Configuration** defines the structure and style of the container and its elements.
- **Content Configuration** defines the actual content that will be displayed within the container.

Here’s an example configuration:

```json
{
  "id": 100,
  "type": "container",
  "orientation": "horizontal",  // "horizontal" or "vertical"
  "elements": [
    {
      "type": "text",
      "textType": "body",
      "fontSize": "24px",
      "fontWeight": "normal",
      "color": "#FFFFFF",
      "marginBottom": "40px"
    },
    // Additional elements...
  ],
  "contents": [
    {
      "content": "Welcome to Your Next Adventure",
      "type": "subheading"
    },
    // Additional content items...
  ]
}
```

Integrating the Component
To use the Container Component, pass the combined layout and content configuration along with other necessary props to the Render component. Here’s an example of how to integrate it:

```javascript

import { Render } from './RenderComponent';
import { motion } from 'framer-motion';

// Example layout and content configuration
const config = {
  id: 100,
  type: "container",
  orientation: "horizontal",
  elements: [
    {
      type: "text",
      textType: "body",
      fontSize: "24px",
      fontWeight: "normal",
      color: "#FFFFFF",
      marginBottom: "40px"
    },
    // More elements...
  ],
  contents: [
    {
      content: "Welcome to Your Next Adventure",
      type: "subheading"
    },
    // More content items...
  ]
};


function App() {
  return (
      <Render
        data={config}
        activeElement={activeElement}
        toggleActive={toggleActive}
        findElement={findItemById}
      />
  );
}

export default App;
```

Props
data: The combined configuration object defining both the structure and content of the container.
activeElement: The currently active element in the container, used for managing state.
toggleActive: A function to toggle the active state of elements within the container.
findElement: A function to find an element by its ID within the container.
Handling Interactivity
Active Elements: The activeElement prop manages the active state of elements, allowing for interactions such as highlighting or expanding content.
Toggling Active State: The toggleActive function is used to switch the active state of elements, enabling dynamic interaction.
Finding Elements: The findElement function helps in locating specific elements within the layout, useful for conditional rendering or interaction logic.
Example
Here’s a more detailed example of how to set up and use the Render component with the necessary props:

```javascript

const config = {
  id: 100,
  type: "container",
  orientation: "horizontal",
  elements: [
    {
      type: "text",
      textType: "body",
      fontSize: "24px",
      fontWeight: "normal",
      color: "#FFFFFF",
      marginBottom: "40px"
    },
    // Additional elements...
  ],
  contents: [
    {
      content: "Welcome to Your Next Adventure",
      type: "subheading"
    },
    // Additional content items...
  ]
};

function App() {
  return (
      <Render
        data={config}
        activeElement={activeElement}
        toggleActive={toggleActive}
        findElement={findItemById}
      />
  );
}
```
Conclusion
The Render component within the Container Component setup offers a flexible and interactive way to manage and display grouped UI elements. With customizable layouts, dynamic content handling, and interactive features, it provides a powerful tool for building structured and engaging web interfaces.