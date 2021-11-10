import resolve from '@rollup/plugin-node-resolve';

export default {
  input: 'js/app.js',
  output: [
    {
      format: 'esm',
      file: 'js/bundle.js'
    },
  ],
  plugins: [
    resolve(),
  ]
};