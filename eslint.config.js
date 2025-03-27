import { defineConfig } from "eslint/config";
import js from "@eslint/js";

export default defineConfig([
	{
		files: ["**/*.js"],
		plugins: {
			js,
		},
		extends: ["js/recommended"],
		rules: {
			"no-unused-vars": "warn",
			"no-undef": "warn",
            "no-console": "error",
            "eqeqeq": "error",
            "semi": ["error", "always"],
            "no-trailing-spaces": "error",
            "indent": ["error", 4]
		},
	},
]);
