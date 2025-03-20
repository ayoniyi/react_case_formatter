/**
 * A collection of utility functions for formatting text cases in React applications.
 */

/**
 * Converts a string to PascalCase.
 * Example: "hello world" -> "HelloWorld"
 */
export function toPascalCase(str: string): string {
  if (!str) return "";

  return str
    .replace(/[^\w\s]/g, "") // Remove special characters
    .replace(/(?:^\w|\b\w)/g, (word: string) => {
      return word.toUpperCase();
    })
    .replace(/\s+/g, ""); // Remove spaces
}

/**
 * Converts a string to camelCase.
 * Example: "Hello World" -> "helloWorld"
 */
export function toCamelCase(str: string): string {
  if (!str) return "";

  return str
    .replace(/[^\w\s]/g, "") // Remove special characters
    .replace(/(?:^\w|[A-Z]|\b\w)/g, (word: string, index: number) => {
      return index === 0 ? word.toLowerCase() : word.toUpperCase();
    })
    .replace(/\s+/g, ""); // Remove spaces
}

/**
 * Capitalizes the first letter of each word in a string.
 * Example: "hello world" -> "Hello World"
 */
export function capitalizeWords(str: string): string {
  if (typeof str !== "string" || !str) {
    return "";
  }

  return str
    .split(" ") // Split the string into an array of words
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) // Capitalize the first letter and make the rest lowercase
    .join(" "); // Join the words back into a single string
}

/**
 * Capitalizes only the first letter of a string.
 * Example: "hello world" -> "Hello world"
 */
export function capitalizeFirstLetter(str: string): string {
  if (!str) return "";

  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Converts a string to snake_case.
 * Example: "Hello World" -> "hello_world"
 */
export function toSnakeCase(str: string): string {
  if (!str) return "";

  return str
    .replace(/[^\w\s]/g, "")
    .replace(/([a-z])([A-Z])/g, "$1_$2") // Add underscore between camelCase
    .replace(/\s+/g, "_") // Replace spaces with underscores
    .toLowerCase();
}

/**
 * Converts a string to kebab-case.
 * Example: "Hello World" -> "hello-world"
 */
export function toKebabCase(str: string): string {
  if (!str) return "";

  return str
    .replace(/[^\w\s]/g, "")
    .replace(/([a-z])([A-Z])/g, "$1-$2") // Add hyphen between camelCase
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .toLowerCase();
}

/**
 * Converts a string to CONSTANT_CASE.
 * Example: "Hello World" -> "HELLO_WORLD"
 */
export function toConstantCase(str: string): string {
  if (!str) return "";

  return str
    .replace(/[^\w\s]/g, "")
    .replace(/([a-z])([A-Z])/g, "$1_$2") // Add underscore between camelCase
    .replace(/\s+/g, "_") // Replace spaces with underscores
    .toUpperCase();
}

/**
 * Converts a string to lower case.
 * Example: "Hello World" -> "hello world"
 */
export function toLowerCase(str: string): string {
  if (!str) return "";

  return str.toLowerCase();
}

/**
 * Converts a string to UPPER CASE.
 * Example: "Hello World" -> "HELLO WORLD"
 */
export function toUpperCase(str: string): string {
  if (!str) return "";

  return str.toUpperCase();
}

/**
 * Converts a string to Title Case (capitalizes first letter of each word, but follows title case rules).
 * Example: "hello world the of and" -> "Hello World the of and"
 */
export function toTitleCase(str: string): string {
  if (!str) return "";

  // Words that should remain lowercase in titles (unless they're the first word)
  const lowercaseWords = [
    "a",
    "an",
    "the",
    "and",
    "but",
    "or",
    "for",
    "nor",
    "on",
    "at",
    "to",
    "from",
    "by",
    "of",
    "in",
  ];

  const words = str.toLowerCase().split(" ");

  return words
    .map((word, index) => {
      if (index === 0 || !lowercaseWords.includes(word)) {
        return word.charAt(0).toUpperCase() + word.slice(1);
      }
      return word;
    })
    .join(" ");
}

/**
 * Converts a string to sentence case (capitalizes first letter of first word only).
 * Example: "hello WORLD example" -> "Hello world example"
 */
export function toSentenceCase(str: string): string {
  if (!str) return "";

  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}
