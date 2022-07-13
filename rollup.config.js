import resolve from '@rollup/plugin-node-resolve'
import babel from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import { terser } from 'rollup-plugin-terser'
import external from 'rollup-plugin-peer-deps-external'
import del from 'rollup-plugin-delete'

export default [
  {
    input: 'src/index.ts',
    plugins: [
      del({ targets: 'dist/*' }),
      external({ deps: true }),
      resolve({
        extensions: ['.js', '.ts', '.tsx'],
      }),
      commonjs(),
      babel({
        babelHelpers: 'runtime',
        exclude: '**/node_modules/**',
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      }),
      external(),
      typescript(),
      terser(),
    ],
    output: [
      {
        file: 'dist/index.js',
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: 'dist/index.es.js',
        format: 'es',
        exports: 'named',
        sourcemap: true,
      },
    ],
  },
]
