/// <reference types="vitest" />

import { defineConfig } from 'vitest/config'
import Vue from '@vitejs/plugin-vue'

import { resolve } from 'node:path'

import svgLoader from 'vite-svg-loader'
import { fileURLToPath } from 'node:url'

const _dirname = fileURLToPath(new URL('.', import.meta.url))

const projectRoot = resolve(_dirname)

export default defineConfig({
  plugins: [Vue(), svgLoader()],
  server: {
    port: 1111,
  },
  test: {
    // setupFiles: ['vitest-canvas-mock'],
    // server: {
    //   deps: {
    //     inline: ['vitest-canvas-mock'],
    //   },
    // },
    globalSetup: './vitest-global.setup.ts',
    environment: 'jsdom',
    environmentOptions: {
      jsdom: {
        resources: 'usable',
      },
    },
    env: {
      TZ: 'UTC',
    },
    globals: true,
    coverage: {
      provider: 'v8',
      all: true,
      reporter: ['clover', 'html'],
      include: ['src'],
      exclude: [
        'src/components/index.ts',
        'src/components/MazPhoneNumberInput/constantes/locales.ts',
        'src/tailwindcss/**/*',
        'src/types/**/*',
        'src/index.ts',
        'src/helpers/index.ts',
        'src/helpers/debounce.ts',
        'src/helpers/user-visibility/index.ts',
        'src/helpers/idle-timeout/index.ts',
        'src/helpers/truthy-filter.ts',
        'src/helpers/is-client.ts',
        'src/helpers/sleep.ts',
        'src/plugins/index.ts',
        'src/filters/index.ts',
        'src/composables/aos.ts',
        'src/directives/index.ts',
        'src/directives/v-zoom-img/index.ts',
        'src/directives/v-zoom-img/style.ts',
        'src/directives/v-zoom-img/svgs.ts',
        'src/directives/v-lazy-img/assets/*',
        'src/directives/v-lazy-img/index.ts',
        'src/**/types.ts',
      ],
      extension: ['.js', '.ts', '.vue'],
    },
  },
  resolve: {
    alias: {
      '@modules': resolve(projectRoot, 'modules'),
      '@components': resolve(projectRoot, 'components'),
      '@tests': resolve(projectRoot, 'tests'),
    },
  },
})
