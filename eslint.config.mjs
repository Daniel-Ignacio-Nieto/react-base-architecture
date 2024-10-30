import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginReact from 'eslint-plugin-react';
import airbnbConfig from 'eslint-config-airbnb';
import pluginPrettier from 'eslint-plugin-prettier';

export default [
  { files: ['**/*.{js,mjs,cjs,jsx}'] },
  { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  airbnbConfig,
  {
    extends: ['react-app', 'react-app/jest', 'airbnb', 'plugin:prettier/recommended'],
    plugins: {
      prettier: pluginPrettier,
    },
    rules: {
      ...pluginPrettier.configs.recommended.rules, // Reglas recomendadas de Prettier
      'prettier/prettier': 'error', // Ejecuta Prettier como una regla de ESLint
      'react/jsx-filename-extension': [1, { extensions: ['.jsx', '.js'] }], // Avisa si un archivo JS contiene JSX
      'react/react-in-jsx-scope': 'off', // En React 17+ ya no es necesario importar React en archivos JSX
      'no-console': 'warn', // Avisa si hay console.log (según estándar de Airbnb)
      'import/prefer-default-export': 'off', // Desactiva la preferencia por exportaciones por defecto (Airbnb)
    },
  },
];
