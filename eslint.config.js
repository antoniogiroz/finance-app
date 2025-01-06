import antfu from '@antfu/eslint-config';
import pluginRouter from '@tanstack/eslint-plugin-router';

export default antfu({
  react: true,
  stylistic: {
    semi: true,
  },
  plugins: [pluginRouter],
});
