import neolutionEslintConfig from "@neolution-ch/eslint-config-neolution";
import storybook from "eslint-plugin-storybook";

export default [
  // Release tooling copied from the release playbook templates, which follow their own style.
  { ignores: ["scripts/"] },
  ...neolutionEslintConfig.configs.flat["react-library"],
  ...storybook.configs["flat/recommended"],
];
