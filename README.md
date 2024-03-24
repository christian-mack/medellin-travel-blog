# Welcome to the Medellin Travel Blog Repo

## Features

- supabase auth
  - supabase-ssr. A package to configure Supabase Auth to use cookies
- Styling with [Tailwind CSS](https://tailwindcss.com)

## Types

### How to Generate Types using Contentful data models

#### Step 1

- Run cf-login to login to Contentful using the Contentful-CLI

#### Step 2

- Run cf-space-use to select the correct space to export data from

#### Step 3

- Run cf-export to export the data needed for the cf-content-types-generator package

#### Step 4

- Run cf-generate to types based on the provided data models

## Components Folder Structure

Welcome to the `components` directory of our Next.js TypeScript application! We organize our components based on the Atomic Design methodology, which divides UI elements into atoms, molecules, organisms, and templates. This structure helps us maintain consistency, reusability, and scalability across our application's UI. Below is an explanation of each category and what types of components you should include in each folder.

### Atoms

**Path:** `/components/atoms`

Atoms are the fundamental building blocks of our application's UI. They are small, reusable components that cannot be broken down any further. Atoms include elements like buttons, inputs, labels, and icons. These components are used in various combinations to build more complex interfaces.

- **Button.tsx:** A basic button component.
- **Input.tsx:** Text input component for forms.
- **Label.tsx:** Text label component for form inputs.

### Molecules

**Path:** `/components/molecules`

Molecules are groups of atoms bonded together to serve as the backbone of our UI. They are slightly more complex components that perform a specific function. Molecules include elements like search bars, form groups, and item lists. These components use atoms to build more complex structures but are still relatively simple.

- **SearchBar.tsx:** A search bar combining an input atom and a button atom.
- **PostTeaser.tsx:** A brief preview of a blog post, combining labels, buttons, and thumbnail images.

### Organisms

**Path:** `/components/organisms`

Organisms are groups of molecules joined together to form distinct sections of an interface. They are complex UI components that can consist of groups of molecules and atoms. Organisms include elements like headers, footers, and sidebars. These components form significant parts of the page layout but are still independent and reusable in different parts of the application.

- **Header.tsx:** The top navigation header of the site, potentially including navigation links (molecules) and a logo (atom).
- **Footer.tsx:** The footer section, containing copyright information, navigation links, and social media icons.

### Templates

**Path:** `/components/templates`

Templates are page-level objects that place components into a layout and demonstrate the design’s underlying content structure. They are not complete pages but rather layouts without real content, serving as a wireframe for pages. Templates provide context to organisms, molecules, and atoms, illustrating how they work together in the layout.

- **PageLayout.tsx:** Defines the overall layout of a page, including the header, footer, and content area where specific organisms, molecules, and atoms are placed.

### Usage Guidelines

- Components should be named clearly and intuitively to reflect their function and type (e.g., `Button`, `UserProfileForm`).
- Each component should be in its own file with a corresponding TypeScript type file if needed.
- Try to make components as reusable as possible by passing data and callbacks as props.
- Include story files for components when possible, using Storybook, to document and visually test each component in isolation.

By adhering to the Atomic Design methodology and following these guidelines, we can ensure our UI components are well-organized, easy to find, and scalable as our application grows. This structure also facilitates collaboration among developers and designers by providing a common language and clear expectations for the UI architecture.
