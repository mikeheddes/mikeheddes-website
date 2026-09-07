import nextConfig from "eslint-config-next/core-web-vitals";
import prettierConfig from "eslint-config-prettier";

const config = [
  {
    ignores: [
      ".next/**",
      "out/**",
      "node_modules/**",
      "content/**",
      "examples/**",
    ],
  },
  ...nextConfig,
  prettierConfig,
  {
    rules: {
      "react-hooks/immutability": "off",
    },
  },
];

export default config;

