import coreWebVitals from 'eslint-config-next/core-web-vitals';

const eslintConfig = [...coreWebVitals, { ignores: ['.next/**', 'out/**', 'node_modules/**'] }];

export default eslintConfig;