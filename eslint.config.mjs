import collanaEslintConfig from "@collana-solutions/eslint-config";
import storybook from "eslint-plugin-storybook";

export default [
  // Release tooling copied from the release playbook templates, which follow their own style.
  { ignores: ["scripts/"] },
  ...collanaEslintConfig.configs.flat["react-library"],
  ...storybook.configs["flat/recommended"],
];
