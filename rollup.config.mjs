import alias from '@rollup/plugin-alias'
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

const baseDist = 'dist/base/'
const dist1 = 'dist/1.0/'
const dist2 = 'dist/2.0/'
const dist3 = 'dist/3.0/'

export default [
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
        __DEBUG__: process.env.NODE_ENV === 'production' ? undefined : true,
        __API_LEVEL__: `'3.0'`
      }),
      nodeResolve(),
      commonjs(),
      alias({
        entries: [
          { find: './promise-1.0', replacement: './promise-3.0' },
          { find: './event', replacement: './device-event' },
          { find: './setTimeout', replacement: './device-setTimeout' },
        ],
      }),
    ],
  },
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
        __DEBUG__: process.env.NODE_ENV === 'production' ? undefined : true,
        __API_LEVEL__: `'3.0'`
      }),
      nodeResolve(),
      commonjs(),
      alias({
        entries: [
          { find: './promise-1.0', replacement: './promise-3.0' },
          { find: './event', replacement: './device-event' },
          { find: './setTimeout', replacement: './device-setTimeout' },
        ],
      }),
    ],
  },
  {
    input: 'src/core/side/zml-side-service.js',
    output: [
      {
        file:  'dist/zml-side.js',
        format: 'es',
        plugins,
      },
    ],
    plugins: [
      replace({
        preventAssignment: true,
        __DEBUG__: process.env.NODE_ENV === 'production' ? undefined : true,
        __API_LEVEL__: `'3.0'`
      }),
      nodeResolve(),
      commonjs(),
      alias({
        entries: [{ find: './promise-1.0', replacement: './promise-3.0' }],
      }),
    ],
  },
  {
    input: 'src/core/device/base-app.js',
    output: [
      {
        file: baseDist + 'base-app.js',
        format: 'es',
        plugins,
      },
    ],
    plugins: [
      replace({
        preventAssignment: true,
        __DEBUG__: process.env.NODE_ENV === 'production' ? undefined : true,
      }),
      nodeResolve(),
      commonjs(),
      alias({
        entries: [
          { find: './event', replacement: './device-event' },
          { find: './setTimeout', replacement: './device-setTimeout' },
        ],
      }),
    ],
  },
  {
    input: 'src/core/device/base-page.js',
    output: [
      {
        file: baseDist + 'base-page.js',
        format: 'es',
        plugins,
      },
    ],
    plugins: [
      replace({
        preventAssignment: true,
        __DEBUG__: process.env.NODE_ENV === 'production' ? undefined : true,
      }),
      nodeResolve(),
      commonjs(),
      alias({
        entries: [
          { find: './event', replacement: './device-event' },
          { find: './setTimeout', replacement: './device-setTimeout' },
        ],
      }),
    ],
  },
  {
    input: 'src/core/side/base-side-service.js',
    output: [
      {
        file: baseDist + 'base-side.js',
        format: 'es',
        plugins,
      },
    ],
    plugins: [
      replace({
        preventAssignment: true,
        __DEBUG__: process.env.NODE_ENV === 'production' ? undefined : true,
      }),
      nodeResolve(),
      commonjs(),
    ],
  },
  // {
  //   input: 'src/core/device/bg-service/bg-service-plugin.js',
  //   output: {
  //     file: 'dist/module/bg-service/plugin.js',
  //     format: 'es',
  //     plugins,
  //   },
  //   plugins: [
  //     replace({
  //       preventAssignment: true,
  //       __DEBUG__: process.env.NODE_ENV === 'production' ? undefined : true,
  //     }),
  //     nodeResolve(),
  //     commonjs(),
  //   ],
  // },
  // {
  //   input: 'src/core/device/bg-service/bg-service.js',
  //   output: {
  //     file: 'dist/module/bg-service/index.js',
  //     format: 'es',
  //     plugins,
  //   },
  //   plugins: [
  //     replace({
  //       preventAssignment: true,
  //       __DEBUG__: process.env.NODE_ENV === 'production' ? undefined : true,
  //     }),
  //     nodeResolve(),
  //     commonjs(),
  //   ],
  // },
  // {
  //   input: 'src/core/common/qs.js',
  //   output: {
  //     file: 'dist/module/qs/index.js',
  //     format: 'es',
  //     plugins,
  //   },
  //   plugins: [
  //     replace({
  //       preventAssignment: true,
  //       __DEBUG__: process.env.NODE_ENV === 'production' ? undefined : true,
  //     }),
  //     nodeResolve(),
  //     commonjs(),
  //   ],
  // },
  // messaging
  {
    input: 'src/core/device/messaging/app-plugin.js',
    output: {
      file: dist1 + 'module/messaging/plugin/app.js',
      format: 'es',
      plugins,
    },
    plugins: [
      replace({
        preventAssignment: true,
        __DEBUG__: process.env.NODE_ENV === 'production' ? undefined : true,
        __API_LEVEL__: `'1.0'`
      }),
      nodeResolve(),
      commonjs(),
    ],
  },
  {
    input: 'src/core/device/messaging/app-plugin.js',
    output: {
      file: dist2 + 'module/messaging/plugin/app.js',
      format: 'es',
      plugins,
    },
    plugins: [
      replace({
        preventAssignment: true,
        __DEBUG__: process.env.NODE_ENV === 'production' ? undefined : true,
        __API_LEVEL__: `'2.0'`
      }),
      nodeResolve(),
      commonjs(),
    ],
  },
  {
    input: 'src/core/device/messaging/app-plugin.js',
    output: {
      file: dist3 + 'module/messaging/plugin/app.js',
      format: 'es',
      plugins,
    },
    plugins: [
      replace({
        preventAssignment: true,
        __DEBUG__: process.env.NODE_ENV === 'production' ? undefined : true,
        __API_LEVEL__: `'3.0'`
      }),
      nodeResolve(),
      commonjs(),
    ],
  },
  {
    input: 'src/core/device/messaging/page-plugin.js',
    output: {
      file: dist1 + 'module/messaging/plugin/page.js',
      format: 'es',
      plugins,
    },
    plugins: [
      replace({
        preventAssignment: true,
        __DEBUG__: process.env.NODE_ENV === 'production' ? undefined : true,
        __API_LEVEL__: `'1.0'`
      }),
      nodeResolve(),
      commonjs(),
    ],
  },
  {
    input: 'src/core/device/messaging/page-plugin.js',
    output: {
      file: dist2 + 'module/messaging/plugin/page.js',
      format: 'es',
      plugins,
    },
    plugins: [
      replace({
        preventAssignment: true,
        __DEBUG__: process.env.NODE_ENV === 'production' ? undefined : true,
        __API_LEVEL__: `'2.0'`
      }),
      nodeResolve(),
      commonjs(),
    ],
  },
  {
    input: 'src/core/device/messaging/page-plugin.js',
    output: {
      file: dist3 + 'module/messaging/plugin/page.js',
      format: 'es',
      plugins,
    },
    plugins: [
      replace({
        preventAssignment: true,
        __DEBUG__: process.env.NODE_ENV === 'production' ? undefined : true,
        __API_LEVEL__: `'3.0'`
      }),
      nodeResolve(),
      commonjs(),
      alias({
        entries: [
          { find: './promise-1.0', replacement: './promise-3.0' },
          { find: './event', replacement: './device-event' },
          { find: './setTimeout', replacement: './device-setTimeout' },
        ],
      }),
    ],
  },
  {
    input: 'src/core/side/messaging/messaging-plugin.js',
    output: [
      {
        file: dist1 + 'module/messaging/plugin/side.js',
        format: 'es',
        plugins,
      },
      {
        file: dist2 + 'module/messaging/plugin/side.js',
        format: 'es',
        plugins,
      },
      {
        file: dist3 + 'module/messaging/plugin/side.js',
        format: 'es',
        plugins,
      },
    ],
    plugins: [
      replace({
        preventAssignment: true,
        __DEBUG__: process.env.NODE_ENV === 'production' ? undefined : true,
      }),
      nodeResolve(),
      commonjs(),
      alias({
        entries: [{ find: './promise-1.0', replacement: './promise-3.0' }],
      }),
    ],
  },
]
