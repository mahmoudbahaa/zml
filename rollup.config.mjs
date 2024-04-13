import commonjs from '@rollup/plugin-commonjs'
import nodeResolve from '@rollup/plugin-node-resolve'
import replace from '@rollup/plugin-replace'
import terser from '@rollup/plugin-terser'

const plugins = []

if (process.env.NODE_ENV === 'production') {
  plugins.push(
    terser({
      compress: {
        passes: 3,
        toplevel: true,
        drop_console: true,
        pure_funcs: [],
        global_defs: {
          __PROD__: true,
        },
      },
    }),
  )
}

export default [
  /* #region  zml app 3.0 */
  {
    input: 'src/core/device/zml-app.js',
    output: [
      {
        file: 'dist/zml-app.js',
        format: 'es',
        plugins,
      },
    ],
    plugins: [
      replace({ 
        preventAssignment: true,
      }),
      nodeResolve(),
      commonjs(),
    ],
  },
  /* #endregion */
  /* #region  zml page 3.0 */
  {
    input: 'src/core/device/zml-page.js',
    output: [
      {
        file: 'dist/zml-page.js',
        format: 'es',
        plugins,
      },
    ],
    plugins: [
      replace({
        preventAssignment: true,
      }),
      nodeResolve(),
      commonjs(),
    ],
  },
  /* #endregion */
  /* #region  zml side-service 3.0 */
  {
    input: 'src/core/side/zml-side-service.js',
    output: [
      {
        file: 'dist/zml-side.js',
        format: 'es',
        plugins,
      },
    ],
    plugins: [
      replace({
        preventAssignment: true,
      }),
      nodeResolve(),
      commonjs(),
    ],
  },
  /* #endregion */
]
