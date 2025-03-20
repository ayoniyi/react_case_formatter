import React, { useState, useEffect } from "react";
import * as formatters from "./formatters";

export interface FormatterProps {
  children?: string;
  text?: string;
  as?: React.ElementType;
  className?: string;
  style?: React.CSSProperties;
  [key: string]: any;
}

/**
 * Component that formats text in PascalCase
 */
export const PascalCase: React.FC<FormatterProps> = ({
  children,
  text,
  as: Component = "span",
  ...props
}) => {
  const content = text || children || "";
  return <Component {...props}>{formatters.toPascalCase(content)}</Component>;
};

/**
 * Component that formats text in camelCase
 */
export const CamelCase: React.FC<FormatterProps> = ({
  children,
  text,
  as: Component = "span",
  ...props
}) => {
  const content = text || children || "";
  return <Component {...props}>{formatters.toCamelCase(content)}</Component>;
};

/**
 * Component that formats text in snake_case
 */
export const SnakeCase: React.FC<FormatterProps> = ({
  children,
  text,
  as: Component = "span",
  ...props
}) => {
  const content = text || children || "";
  return <Component {...props}>{formatters.toSnakeCase(content)}</Component>;
};

/**
 * Component that formats text in kebab-case
 */
export const KebabCase: React.FC<FormatterProps> = ({
  children,
  text,
  as: Component = "span",
  ...props
}) => {
  const content = text || children || "";
  return <Component {...props}>{formatters.toKebabCase(content)}</Component>;
};

/**
 * Component that formats text in CONSTANT_CASE
 */
export const ConstantCase: React.FC<FormatterProps> = ({
  children,
  text,
  as: Component = "span",
  ...props
}) => {
  const content = text || children || "";
  return <Component {...props}>{formatters.toConstantCase(content)}</Component>;
};

/**
 * Component that formats text in Title Case
 */
export const TitleCase: React.FC<FormatterProps> = ({
  children,
  text,
  as: Component = "span",
  ...props
}) => {
  const content = text || children || "";
  return <Component {...props}>{formatters.toTitleCase(content)}</Component>;
};

/**
 * Component that formats text in Sentence case
 */
export const SentenceCase: React.FC<FormatterProps> = ({
  children,
  text,
  as: Component = "span",
  ...props
}) => {
  const content = text || children || "";
  return <Component {...props}>{formatters.toSentenceCase(content)}</Component>;
};

/**
 * Component that capitalizes each word in text
 */
export const CapitalizedWords: React.FC<FormatterProps> = ({
  children,
  text,
  as: Component = "span",
  ...props
}) => {
  const content = text || children || "";
  return (
    <Component {...props}>{formatters.capitalizeWords(content)}</Component>
  );
};

/**
 * Component that capitalizes only the first letter in text
 */
export const Capitalized: React.FC<FormatterProps> = ({
  children,
  text,
  as: Component = "span",
  ...props
}) => {
  const content = text || children || "";
  return (
    <Component {...props}>
      {formatters.capitalizeFirstLetter(content)}
    </Component>
  );
};

/**
 * Component that converts text to uppercase
 */
export const UpperCase: React.FC<FormatterProps> = ({
  children,
  text,
  as: Component = "span",
  ...props
}) => {
  const content = text || children || "";
  return <Component {...props}>{formatters.toUpperCase(content)}</Component>;
};

/**
 * Component that converts text to lowercase
 */
export const LowerCase: React.FC<FormatterProps> = ({
  children,
  text,
  as: Component = "span",
  ...props
}) => {
  const content = text || children || "";
  return <Component {...props}>{formatters.toLowerCase(content)}</Component>;
};

/**
 * Dynamic formatter component that formats text according to the specified format type
 */
export interface DynamicFormatterProps extends FormatterProps {
  format:
    | "pascal"
    | "camel"
    | "snake"
    | "kebab"
    | "constant"
    | "title"
    | "sentence"
    | "upper"
    | "lower"
    | "capitalized"
    | "capitalizedWords";
}

export const CaseFormatter: React.FC<DynamicFormatterProps> = ({
  children,
  text,
  format,
  as: Component = "span",
  ...props
}) => {
  const content = text || children || "";
  let formattedText: string;

  switch (format) {
    case "pascal":
      formattedText = formatters.toPascalCase(content);
      break;
    case "camel":
      formattedText = formatters.toCamelCase(content);
      break;
    case "snake":
      formattedText = formatters.toSnakeCase(content);
      break;
    case "kebab":
      formattedText = formatters.toKebabCase(content);
      break;
    case "constant":
      formattedText = formatters.toConstantCase(content);
      break;
    case "title":
      formattedText = formatters.toTitleCase(content);
      break;
    case "sentence":
      formattedText = formatters.toSentenceCase(content);
      break;
    case "upper":
      formattedText = formatters.toUpperCase(content);
      break;
    case "lower":
      formattedText = formatters.toLowerCase(content);
      break;
    case "capitalized":
      formattedText = formatters.capitalizeFirstLetter(content);
      break;
    case "capitalizedWords":
      formattedText = formatters.capitalizeWords(content);
      break;
    default:
      formattedText = content;
  }

  return <Component {...props}>{formattedText}</Component>;
};
