import { useState, useCallback } from "react";
import * as formatters from "./formatters";

/**
 * React hook for using the PascalCase formatter
 * @param initialValue - The initial string value
 * @returns A tuple containing the formatted value and a function to update the value
 */
export function usePascalCase(initialValue: string = "") {
  const [value, setValue] = useState(formatters.toPascalCase(initialValue));

  const updateValue = useCallback((newValue: string) => {
    setValue(formatters.toPascalCase(newValue));
  }, []);

  return [value, updateValue] as const;
}

/**
 * React hook for using the camelCase formatter
 * @param initialValue - The initial string value
 * @returns A tuple containing the formatted value and a function to update the value
 */
export function useCamelCase(initialValue: string = "") {
  const [value, setValue] = useState(formatters.toCamelCase(initialValue));

  const updateValue = useCallback((newValue: string) => {
    setValue(formatters.toCamelCase(newValue));
  }, []);

  return [value, updateValue] as const;
}

/**
 * React hook for using the snake_case formatter
 * @param initialValue - The initial string value
 * @returns A tuple containing the formatted value and a function to update the value
 */
export function useSnakeCase(initialValue: string = "") {
  const [value, setValue] = useState(formatters.toSnakeCase(initialValue));

  const updateValue = useCallback((newValue: string) => {
    setValue(formatters.toSnakeCase(newValue));
  }, []);

  return [value, updateValue] as const;
}

/**
 * React hook for using the kebab-case formatter
 * @param initialValue - The initial string value
 * @returns A tuple containing the formatted value and a function to update the value
 */
export function useKebabCase(initialValue: string = "") {
  const [value, setValue] = useState(formatters.toKebabCase(initialValue));

  const updateValue = useCallback((newValue: string) => {
    setValue(formatters.toKebabCase(newValue));
  }, []);

  return [value, updateValue] as const;
}

/**
 * React hook for using the CONSTANT_CASE formatter
 * @param initialValue - The initial string value
 * @returns A tuple containing the formatted value and a function to update the value
 */
export function useConstantCase(initialValue: string = "") {
  const [value, setValue] = useState(formatters.toConstantCase(initialValue));

  const updateValue = useCallback((newValue: string) => {
    setValue(formatters.toConstantCase(newValue));
  }, []);

  return [value, updateValue] as const;
}

/**
 * React hook for using the Title Case formatter
 * @param initialValue - The initial string value
 * @returns A tuple containing the formatted value and a function to update the value
 */
export function useTitleCase(initialValue: string = "") {
  const [value, setValue] = useState(formatters.toTitleCase(initialValue));

  const updateValue = useCallback((newValue: string) => {
    setValue(formatters.toTitleCase(newValue));
  }, []);

  return [value, updateValue] as const;
}

/**
 * React hook for using the Sentence case formatter
 * @param initialValue - The initial string value
 * @returns A tuple containing the formatted value and a function to update the value
 */
export function useSentenceCase(initialValue: string = "") {
  const [value, setValue] = useState(formatters.toSentenceCase(initialValue));

  const updateValue = useCallback((newValue: string) => {
    setValue(formatters.toSentenceCase(newValue));
  }, []);

  return [value, updateValue] as const;
}

/**
 * React hook for using multiple case formatters at once
 * @param initialValue - The initial string value
 * @returns An object containing all formatted case versions of the input value and a function to update all cases
 */
export function useCaseFormatter(initialValue: string = "") {
  const [value, setValue] = useState({
    original: initialValue,
    camelCase: formatters.toCamelCase(initialValue),
    pascalCase: formatters.toPascalCase(initialValue),
    snakeCase: formatters.toSnakeCase(initialValue),
    kebabCase: formatters.toKebabCase(initialValue),
    constantCase: formatters.toConstantCase(initialValue),
    titleCase: formatters.toTitleCase(initialValue),
    sentenceCase: formatters.toSentenceCase(initialValue),
    lower: formatters.toLowerCase(initialValue),
    upper: formatters.toUpperCase(initialValue),
    capitalized: formatters.capitalizeFirstLetter(initialValue),
    capitalizedWords: formatters.capitalizeWords(initialValue),
  });

  const updateValue = useCallback((newValue: string) => {
    setValue({
      original: newValue,
      camelCase: formatters.toCamelCase(newValue),
      pascalCase: formatters.toPascalCase(newValue),
      snakeCase: formatters.toSnakeCase(newValue),
      kebabCase: formatters.toKebabCase(newValue),
      constantCase: formatters.toConstantCase(newValue),
      titleCase: formatters.toTitleCase(newValue),
      sentenceCase: formatters.toSentenceCase(newValue),
      lower: formatters.toLowerCase(newValue),
      upper: formatters.toUpperCase(newValue),
      capitalized: formatters.capitalizeFirstLetter(newValue),
      capitalizedWords: formatters.capitalizeWords(newValue),
    });
  }, []);

  return [value, updateValue] as const;
}
