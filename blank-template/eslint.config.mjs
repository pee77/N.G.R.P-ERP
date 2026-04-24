import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    files: ["src/components/**/*.tsx"],
    rules: {
      "@next/next/no-img-element": "off",
    },
  },
  {
    files: ["src/app/layout.tsx"],
    rules: {
      "@next/next/no-css-tags": "off",
    },
  },
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    "public/js/**",
    "public/css/**",
    "public/fonts/**",
    "public/img/**",
  ]),
]);

export default eslintConfig;
