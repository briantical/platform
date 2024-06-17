import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintConfigPrettier, { rules } from 'eslint-config-prettier';

export default [
	{
		languageOptions: { globals: globals.browser },
		rules: {
			'no-console': 'error',
			'no-undefined': 'error',
			'no-unused-vars': 'error',
		},
	},
	pluginJs.configs.recommended,
	...tseslint.configs.recommended,
	eslintConfigPrettier,
];
