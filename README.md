# react-case-formatter

A lightweight React utility library for formatting text cases (camelCase, PascalCase, etc.).

[![npm version](https://img.shields.io/npm/v/react-case-formatter.svg)](https://www.npmjs.com/package/react-case-formatter)
[![npm downloads](https://img.shields.io/npm/dm/react-case-formatter.svg)](https://www.npmjs.com/package/react-case-formatter)
[![bundle size](https://img.shields.io/bundlephobia/minzip/react-case-formatter.svg)](https://bundlephobia.com/result?p=react-case-formatter)

## Features

- 🔠 **Multiple Formatting Options**: camelCase, PascalCase, snake_case, kebab-case, CONSTANT_CASE, Title Case, Sentence case, and more.
- ⚛️ **React Components**: Ready-to-use React components for each formatting style.
- 🪝 **React Hooks**: Custom hooks for easily implementing case formatting in functional components.
- 🔧 **Utility Functions**: Standalone formatter functions for use in any context.
- 📦 **Zero Dependencies**: Lightweight with zero runtime dependencies.
- 📱 **TypeScript Support**: Built with TypeScript for enhanced developer experience.

## Installation

```bash
# npm
npm install react-case-formatter

# yarn
yarn add react-case-formatter

# pnpm
pnpm add react-case-formatter
```

## Quick Start

```jsx
import React, { useState } from "react";
import {
  CamelCase,
  PascalCase,
  SnakeCase,
  useCaseFormatter,
} from "react-case-formatter";

function App() {
  // Using individual components
  return (
    <div>
      <h3>Component Examples:</h3>
      <p>
        <CamelCase>Hello World Example</CamelCase>
      </p> {/* helloWorldExample */}
      <p>
        <PascalCase>Hello World Example</PascalCase>
      </p>{" "}
      {/* HelloWorldExample */}
      <p>
        <SnakeCase>Hello World Example</SnakeCase>
      </p> {/* hello_world_example */}
      <FormatterDemo />
    </div>
  );
}

// Using the hook
function FormatterDemo() {
  const [input, setInput] = useState("Hello World Example");
  const [formatted, updateFormatted] = useCaseFormatter(input);

  const handleChange = (e) => {
    const newValue = e.target.value;
    setInput(newValue);
    updateFormatted(newValue);
  };

  return (
    <div>
      <h3>Hook Example:</h3>
      <input
        type="text"
        value={input}
        onChange={handleChange}
        placeholder="Type something..."
      />

      <div style={{ marginTop: "10px" }}>
        <p>camelCase: {formatted.camelCase}</p>
        <p>PascalCase: {formatted.pascalCase}</p>
        <p>snake_case: {formatted.snakeCase}</p>
        <p>kebab-case: {formatted.kebabCase}</p>
        <p>CONSTANT_CASE: {formatted.constantCase}</p>
        <p>Title Case: {formatted.titleCase}</p>
        <p>Sentence case: {formatted.sentenceCase}</p>
      </div>
    </div>
  );
}

export default App;
```

## API

### Utility Functions

```javascript
import {
  toCamelCase,
  toPascalCase,
  toSnakeCase,
  toKebabCase,
  toConstantCase,
  toTitleCase,
  toSentenceCase,
  toLowerCase,
  toUpperCase,
  capitalizeFirstLetter,
  capitalizeWords,
} from "react-case-formatter";

// Examples
toCamelCase("Hello World"); // 'helloWorld'
toPascalCase("hello world"); // 'HelloWorld'
toSnakeCase("Hello World"); // 'hello_world'
toKebabCase("Hello World"); // 'hello-world'
toConstantCase("Hello World"); // 'HELLO_WORLD'
toTitleCase("hello world"); // 'Hello World'
toSentenceCase("hello WORLD"); // 'Hello world'
toLowerCase("Hello World"); // 'hello world'
toUpperCase("Hello World"); // 'HELLO WORLD'
capitalizeFirstLetter("hello"); // 'Hello'
capitalizeWords("hello world"); // 'Hello World'
```

### React Components

```jsx
import {
  CamelCase,
  PascalCase,
  SnakeCase,
  KebabCase,
  ConstantCase,
  TitleCase,
  SentenceCase,
  UpperCase,
  LowerCase,
  Capitalized,
  CapitalizedWords,
  CaseFormatter
} from 'react-case-formatter';

// Examples
<CamelCase>Hello World</CamelCase>              // helloWorld
<PascalCase>Hello World</PascalCase>            // HelloWorld
<SnakeCase>Hello World</SnakeCase>              // hello_world
<KebabCase>Hello World</KebabCase>              // hello-world
<ConstantCase>Hello World</ConstantCase>        // HELLO_WORLD
<TitleCase>hello of the world</TitleCase>       // Hello of the World
<SentenceCase>HELLO WORLD</SentenceCase>        // Hello world
<UpperCase>Hello World</UpperCase>              // HELLO WORLD
<LowerCase>Hello World</LowerCase>              // hello world
<Capitalized>hello world</Capitalized>          // Hello world
<CapitalizedWords>hello world</CapitalizedWords>// Hello World

// Dynamic formatter
<CaseFormatter format="camel">Hello World</CaseFormatter>  // helloWorld
<CaseFormatter format="pascal">Hello World</CaseFormatter> // HelloWorld

// Use with custom element type
<CamelCase as="div">Hello World</CamelCase>
<PascalCase as="h1">Hello World</PascalCase>

// Use with text prop instead of children
<CamelCase text="Hello World" />
```

### React Hooks

```jsx
import {
  useCamelCase,
  usePascalCase,
  useSnakeCase,
  useKebabCase,
  useConstantCase,
  useTitleCase,
  useSentenceCase,
  useCaseFormatter,
} from "react-case-formatter";

function MyComponent() {
  // Individual case hooks
  const [camelCaseValue, updateCamelCase] = useCamelCase("Hello World");
  const [pascalCaseValue, updatePascalCase] = usePascalCase("Hello World");

  // Or use the combined hook to get all formats at once
  const [formattedValues, updateAllFormats] = useCaseFormatter("Hello World");

  return (
    <div>
      <p>Camel Case: {camelCaseValue}</p>
      <p>Pascal Case: {pascalCaseValue}</p>

      <button onClick={() => updateCamelCase("New Example Text")}>
        Update Camel Case
      </button>

      <hr />

      <h3>All Formats:</h3>
      <p>Original: {formattedValues.original}</p>
      <p>Camel: {formattedValues.camelCase}</p>
      <p>Pascal: {formattedValues.pascalCase}</p>
      <p>Snake: {formattedValues.snakeCase}</p>
      <p>Kebab: {formattedValues.kebabCase}</p>
      <p>Constant: {formattedValues.constantCase}</p>
      <p>Title: {formattedValues.titleCase}</p>
      <p>Sentence: {formattedValues.sentenceCase}</p>

      <button onClick={() => updateAllFormats("Updated All Formats")}>
        Update All Formats
      </button>
    </div>
  );
}
```

## Authors

- Ayo Niyi [@ayoniyi](https://github.com/ayoniyi)
