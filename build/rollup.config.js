import commonjs from 'rollup-plugin-commonjs'
import buble from 'rollup-plugin-buble'
import { terser } from 'rollup-plugin-terser'

export default {
  input: 'index.js',
  output: {
    name: 'self',
    exports: 'auto'
  },
  plugins: [
    commonjs(),
    buble(),
    terser({
      include: [/^.+\.min\.js$/, '*esm*']
    })
  ]
}
