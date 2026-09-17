import nextVitals from "eslint-config-next/core-web-vitals"
import nextTs from "eslint-config-next/typescript"
import pluginImport from "eslint-plugin-import"
import pluginSimpleImportSort from "eslint-plugin-simple-import-sort"
import eslintPluginSortDestructureKeys from "eslint-plugin-sort-destructure-keys"
import eslintPluginSortKeysFix from "eslint-plugin-sort-keys-fix"
import pluginUnicorn from "eslint-plugin-unicorn"
import { defineConfig, globalIgnores } from "eslint/config"

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  globalIgnores([
    "node_modules/**",
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
  {
    plugins: {
      import: pluginImport,
      "simple-import-sort": pluginSimpleImportSort,
      "sort-destructure-keys": eslintPluginSortDestructureKeys,
      "sort-keys-fix": eslintPluginSortKeysFix,
      unicorn: pluginUnicorn,
    },
    rules: {
      "@typescript-eslint/semi": "off",
      curly: ["error", "all"],
      "import/order": "off",
      "react-hooks/config": "off",
      "react-hooks/error-boundaries": "off",
      "react-hooks/gating": "off",
      "react-hooks/globals": "off",
      "react-hooks/immutability": "off",
      "react-hooks/incompatible-library": "off",
      "react-hooks/preserve-manual-memoization": "off",
      "react-hooks/purity": "off",
      "react-hooks/refs": "off",
      "react-hooks/set-state-in-effect": "off",
      "react-hooks/set-state-in-render": "off",
      "react-hooks/static-components": "off",
      "react-hooks/unsupported-syntax": "off",
      "react-hooks/use-memo": "off",
      semi: "off",
      "simple-import-sort/exports": "off",
      "simple-import-sort/imports": "off",
      "sort-destructure-keys/sort-destructure-keys": [
        "error",
        {
          caseSensitive: true,
        },
      ],
      "sort-keys-fix/sort-keys-fix": "error",
      "unicorn/filename-case": ["error", { case: "kebabCase" }],
    },
    settings: {
      "import/resolver": {
        typescript: {},
      },
    },
  },
  {
    files: [
      "**/__tests__/**/*.{ts,js}",
      "**/*.test.{ts,js}",
      "**/*.spec.{ts,js}",
    ],
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
      "sort-destructure-keys/sort-destructure-keys": "off",
      "sort-keys-fix/sort-keys-fix": "off",
    },
  },
])

export default eslintConfig
