import minimist from 'minimist'
import { resolve } from 'node:path'
import { build, type InlineConfig, type LibraryFormats } from 'vite'
import Vue from '@vitejs/plugin-vue'
import svgLoader from 'vite-svg-loader'
import { viteStaticCopy, type Target } from 'vite-plugin-static-copy'
import { logger } from './utils/logger'
// import { execPromise } from './utils/exec-promise'
import { generateComponentsEntryFile } from './generate-components-entry'
// import { generateLibComponentsEntryFile } from './generate-lib-entry'
// import { compileScss } from './compile-scss'
// import { copyAndTransformComponentsTypesFiles } from './copy-components-types'
// import { readdir, rename } from 'node:fs/promises'
// import replace from 'replace-in-file'
// import { getComponentList } from './get-component-list'
import dts from 'vite-plugin-dts'

import { libInjectCss } from 'vite-plugin-lib-inject-css'
// import { copyFileSync } from 'node:fs'

import { fileURLToPath } from 'node:url'

const _dirname = fileURLToPath(new URL('.', import.meta.url))

// const argv = minimist(process.argv.slice(2))

const staticAssetsToCopy: Target[] = [
  {
    src: resolve(_dirname, '../src/tailwindcss'),
    dest: resolve(_dirname, '../dist'),
  },
  {
    src: resolve(_dirname, '../package.json'),
    dest: resolve(_dirname, '../dist'),
  },
  {
    src: resolve(_dirname, '../src/icons'),
    dest: resolve(_dirname, '../dist'),
  },
  {
    src: resolve(_dirname, '../bin'),
    dest: resolve(_dirname, '../dist'),
  },
  {
    src: resolve(_dirname, '../../../README.md'),
    dest: resolve(_dirname, '../dist'),
  },
]

const getBuildConfig = ({
  path,
  name,
  outDir,
  formats = ['es', 'cjs'],
  // hash,
}: {
  formats?: LibraryFormats[]
  name: string
  outDir: string
  path: string
  hash?: string
}): InlineConfig => ({
  build: {
    emptyOutDir: true,
    outDir,
    minify: true,
    cssCodeSplit: true,
    cssMinify: true,
    lib: {
      // Can be an array of multiple entry points
      entry: path,
      name,
      // fileName: (format) => `your-library.${format}.js`,
      formats,
    },
    rollupOptions: {
      treeshake: true,
      external: [
        'vue',
        // 'libphonenumber-js',
        // 'dayjs',
        // '/^dayjs:.*/',
        // 'chart.js',
        // 'dropzone',
        // 'vue-chartjs',
        // 'nuxt',
        // '@nuxt/kit',
        // 'tailwindcss',
      ],
      // external: ['vue'],
      output: {
        exports: 'named',
        chunkFileNames: `chunks/[name]-[hash].js`,
        assetFileNames: `assets/[name].[ext]`,
        // manualChunks: (id) => id
        // entryFileNames: `[name].js`,
        preserveModules: true,
        inlineDynamicImports: false,
        globals: {
          vue: 'Vue',
          // 'libphonenumber-js': 'libphonenumber-js',
          // dayjs: 'dayjs',
          // dropzone: 'dropzone',
          // 'vue-chartjs': 'vue-chartjs',
          // 'chart.js': 'chart.js',
          // 'dayjs/plugin/customParseFormat': 'dayjs/plugin/customParseFormat',
          // 'dayjs/plugin/weekday': 'dayjs/plugin/weekday',
          // 'dayjs/plugin/isBetween': 'dayjs/plugin/isBetween',
        },
      },
    },
  },
  plugins: [
    Vue(),
    svgLoader(),
    // libInjectCss(),
    dts({
      tsconfigPath: resolve(_dirname, '../tsconfig.json'),
      insertTypesEntry: true,
      outDir: resolve(_dirname, '../dist/types'),
    }),
    viteStaticCopy({ targets: staticAssetsToCopy }),
  ],
})

const run = async () => {
  try {
    // await execPromise('rimraf dist')

    await generateComponentsEntryFile()

    await build(
      getBuildConfig({
        path: resolve(_dirname, './../src/index.ts'),
        name: 'maz-ui',
        outDir: resolve(_dirname, '../dist'),
      }),
    )

    // Emit types from all packages
    // await execPromise('pnpm -F maz-ui gen:declaration-files')

    // copyAndTransformComponentsTypesFiles()
    // copyFileSync(
    //   resolve('./dist/types/resolvers/index.d.ts'),
    //   resolve('./dist/resolvers/index.d.ts'),
    // )
    // copyFileSync(
    //   resolve('./dist/types/resolvers/unplugin-vue-components-resolver.d.ts'),
    //   resolve('./dist/resolvers/unplugin-vue-components-resolver.d.ts'),
    // )

    // await generateLibComponentsEntryFile()

    // Build main.css file with tailwind
    // await execPromise(
    //   'tailwindcss -i tailwindcss/tailwind.css -o dist/css/main.css --config tailwind.config.ts --postcss --minify',
    // )

    // await compileScss()

    // await execPromise('pnpm -F nuxt-module build')
    // await execPromise('pnpm -F @mazui/cli build')

    // // Nuxt Module: rename all module.* to index.*
    // const fileList = await readdir(resolve(_dirname, './../dist/nuxt'), {
    //   withFileTypes: true,
    // })

    // const fileListToRename = fileList.filter(
    //   (dirent) => dirent.isFile() && dirent.name.startsWith('module'),
    // )

    // for await (const { path, name } of fileListToRename) {
    //   const extenstion = name.slice(Math.max(0, name.indexOf('.')))
    //   await rename(resolve(path, name), resolve(path, `index${extenstion}`))
    // }

    // await replace({
    //   files: [
    //     resolve(_dirname, '../dist/nuxt/types.d.mts'),
    //     resolve(_dirname, '../dist/nuxt/types.d.ts'),
    //     resolve(_dirname, '../dist/nuxt/index.cjs'),
    //   ],
    //   from: new RegExp('./module', 'g'),
    //   to: './index',
    // })

    // await replace({
    //   files: resolve(_dirname, '../dist/package.json'),
    //   from: [
    //     new RegExp('"main": "./modules/index.ts"', 'g'),
    //     new RegExp('"module": "./modules/index.ts"', 'g'),
    //     new RegExp('"import": "./modules/index.ts"', 'g'),
    //     new RegExp('"require": "./modules/index.ts"', 'g'),
    //     new RegExp('"import": "./resolvers/index.ts"', 'g'),
    //     new RegExp('"require": "./resolvers/index.ts"', 'g'),
    //     new RegExp('./components/index.ts', 'g'),
    //     /"workspace:\*"/g,
    //   ],
    //   to: [
    //     '"main": "./modules/index.cjs"',
    //     '"module": "./modules/index.mjs"',
    //     '"import": "./modules/index.mjs"',
    //     '"require": "./modules/index.cjs"',
    //     '"import": "./resolvers/index.mjs"',
    //     '"require": "./resolvers/index.cjs"',
    //     './components/index.mjs',
    //     `"latest"`,
    //   ],
    // })

    logger.success('[vite.config.js](run) 💚 library builded with success 💚')
  } catch (error) {
    logger.error('[vite.config.js](run) 🔴 Error while building library', error)

    throw new Error(`[vite.config.js](run) 🔴 Error while building library - ${error}`)
  }
}

run()

/* eslint-enable @typescript-eslint/ban-ts-comment */
