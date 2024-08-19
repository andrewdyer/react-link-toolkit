# React Link Toolkit

A package to effortlessly manage and swap link components in React applications.

## License

Licensed under MIT. Totally free for private or commercial projects.

## Getting Started

To install this package use npm:

```bash
npm install react-link-toolkit
```

## Usage

### First, Create a Custom Link Component

To begin, create a simple custom link component.

```tsx
// DummyLink.tsx
function DummyLink(props: { children: React.ReactNode; to: string }) {
    return <a href={to}>{children}</a>;
}

export default DummyLink;
```

The `DummyLink` component serves as a basic example in this demo and simply wraps an anchor element. While `DummyLink` is adequate for demonstration purposes, a more robust link component, such as `Link` from react-router-dom, is typically used in production applications to handle navigation within a single-page application (SPA).

### Wrap the React Application

To ensure a consistent link component is used throughout the application, the root component should be wrapped with `LinkProvider`. This setup allows any component within the application to access the specified link component via React context.

```tsx
// index.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { LinkProvider } from 'react-link-toolkit';
import App from './App';
import DummyLink from './DummyLink';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <LinkProvider LinkComponent={DummyLink}>
        <App />
    </LinkProvider>,
    document.getElementById('root')
);
```

In this example, `LinkProvider` wraps the App component, with `DummyLink` set as the link component. This configuration ensures that all links rendered within the application use `DummyLink`, providing consistent styling and behavior across the application.

### Using the `useLink` Hook

The `useLink` hook retrieves the link component defined in `LinkProvider`. This ensures consistent usage of the specified link component throughout different parts of the application.

```tsx
// App.tsx
import React from 'react';
import { useLink } from 'react-link-toolkit';

function App() {
    const Link = useLink();

    return <Link to="/home">Home</Link>;
}

export default App;
```

In this example, the `useLink` hook provides access to the `Link` component configured in `LinkProvider`. The retrieved `Link` component is then used to render a link to the /home route. This method guarantees that the link component remains consistent with what was defined in the provider, simplifying the process of switching out or customizing link components without needing to update individual components across the application.

## Local Development

For local development, use Yalc to install this package in your project.

Yalc is a tool for managing local development of npm packages. It allows you to work on this package locally and test it in other projects without publishing to the npm registry.

To use yalc, you need to install it globally on your machine. You can do this using npm:

```bash
npm install yalc -g
```

### Installing the Package with Yalc

First, navigate to the project directory where you want to use this package and run:

```bash
yalc add react-link-toolkit
```

This will install the package from the local Yalc store. You can now use it in the project as you would with any other npm package.

### Updating the Package with Yalc

After publishing changes to this package to the local Yalc store, navigate to the project directory and run:

```bash
yalc update react-link-toolkit
```

This will update the installed version of this package in the project.

## Available Scripts

In the project directory, you can run:

### `npm run build`

Builds production files in your `dist/` folder. It generates CommonJS, ES Modules, as well as TypeScript declaration files.

### `npm run build:cjs`

Builds CommonJS (CJS) modules for the project.

### `npm run build:esm`

Builds ES Modules (ESM) for the project.

### `npm run build:types`

Generates TypeScript declaration files.

### `npm run clean`

Removes the `dist/` folder to ensure a clean build.

### `npm run format`

Formats the code using Prettier according to the rules defined in package.json.

### `npm run test`

Runs the test suite for the project using Jest.

### `npm run test:watch`

Runs the test suite in watch mode, re-running tests when files change.

### `npm run test:coverage`

Runs the test suite and generates a coverage report.

### `npm run yalc:publish`

Publishes the package to the local Yalc store for local development.

### `npm run yalc:push`

Publishes updates to the package in the local Yalc store and pushes the changes to linked projects.

## Publishing

This repository is configured to publish the package to npm, every time you publish a new release, using GitHub Actions.

### Creating and Using an npm Token

To publish the package, you need an npm token:

1. Log in to your npm account.
2. Navigate to Access Tokens in your npm account settings.
3. Generate a new token with the Automation option, especially if you have 2FA enabled.
4. Add the token to your GitHub repository secrets:
    - Go to Settings > Secrets and variables > Actions.
    - Add a new secret named `NPM_TOKEN` and paste your npm token.
