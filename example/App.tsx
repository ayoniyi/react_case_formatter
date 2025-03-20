import React, { useState } from "react";
import {
  CamelCase,
  PascalCase,
  SnakeCase,
  KebabCase,
  ConstantCase,
  TitleCase,
  SentenceCase,
  CaseFormatter,
  useCaseFormatter,
} from "../src";

import "./styles.css";

const ExampleApp: React.FC = () => {
  const [inputText, setInputText] = useState("Hello World Example");
  const [formatted, updateFormatted] = useCaseFormatter(inputText);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputText(value);
    updateFormatted(value);
  };

  return (
    <div className="container">
      <h1>react-case-formatter Examples</h1>

      <section className="input-section">
        <h2>Try it out</h2>
        <input
          type="text"
          value={inputText}
          onChange={handleInputChange}
          placeholder="Type something..."
          className="text-input"
        />
      </section>

      <section className="examples-section">
        <h2>Component Examples</h2>

        <div className="examples-grid">
          <div className="example-card">
            <h3>CamelCase</h3>
            <div className="output">
              <CamelCase>{inputText}</CamelCase>
            </div>
            <div className="code">{"<CamelCase>{text}</CamelCase>"}</div>
          </div>

          <div className="example-card">
            <h3>PascalCase</h3>
            <div className="output">
              <PascalCase>{inputText}</PascalCase>
            </div>
            <div className="code">{"<PascalCase>{text}</PascalCase>"}</div>
          </div>

          <div className="example-card">
            <h3>snake_case</h3>
            <div className="output">
              <SnakeCase>{inputText}</SnakeCase>
            </div>
            <div className="code">{"<SnakeCase>{text}</SnakeCase>"}</div>
          </div>

          <div className="example-card">
            <h3>kebab-case</h3>
            <div className="output">
              <KebabCase>{inputText}</KebabCase>
            </div>
            <div className="code">{"<KebabCase>{text}</KebabCase>"}</div>
          </div>

          <div className="example-card">
            <h3>CONSTANT_CASE</h3>
            <div className="output">
              <ConstantCase>{inputText}</ConstantCase>
            </div>
            <div className="code">{"<ConstantCase>{text}</ConstantCase>"}</div>
          </div>

          <div className="example-card">
            <h3>Title Case</h3>
            <div className="output">
              <TitleCase>{inputText}</TitleCase>
            </div>
            <div className="code">{"<TitleCase>{text}</TitleCase>"}</div>
          </div>

          <div className="example-card">
            <h3>Sentence case</h3>
            <div className="output">
              <SentenceCase>{inputText}</SentenceCase>
            </div>
            <div className="code">{"<SentenceCase>{text}</SentenceCase>"}</div>
          </div>

          <div className="example-card">
            <h3>Dynamic Formatter</h3>
            <div className="output">
              <CaseFormatter format="pascal">{inputText}</CaseFormatter>
            </div>
            <div className="code">
              {'<CaseFormatter format="pascal">{text}</CaseFormatter>'}
            </div>
          </div>
        </div>
      </section>

      <section className="hook-example">
        <h2>Hook Example</h2>
        <p>
          Results from the <code>useCaseFormatter</code> hook:
        </p>

        <div className="hook-results">
          <div>
            <strong>Original:</strong> {formatted.original}
          </div>
          <div>
            <strong>camelCase:</strong> {formatted.camelCase}
          </div>
          <div>
            <strong>PascalCase:</strong> {formatted.pascalCase}
          </div>
          <div>
            <strong>snake_case:</strong> {formatted.snakeCase}
          </div>
          <div>
            <strong>kebab-case:</strong> {formatted.kebabCase}
          </div>
          <div>
            <strong>CONSTANT_CASE:</strong> {formatted.constantCase}
          </div>
          <div>
            <strong>Title Case:</strong> {formatted.titleCase}
          </div>
          <div>
            <strong>Sentence case:</strong> {formatted.sentenceCase}
          </div>
        </div>
      </section>

      <footer>
        <p>
          <a
            href="https://github.com/yourusername/react-case-formatter"
            target="_blank"
            rel="noreferrer"
          >
            GitHub Repository
          </a>
          {" | "}
          <a
            href="https://www.npmjs.com/package/react-case-formatter"
            target="_blank"
            rel="noreferrer"
          >
            NPM Package
          </a>
        </p>
      </footer>
    </div>
  );
};

export default ExampleApp;
