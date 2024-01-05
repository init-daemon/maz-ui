import { resolve } from 'node:path'
import { writeFileSync, existsSync, mkdirSync } from 'node:fs'
import postcss from 'postcss'
import autoprefixer from 'autoprefixer'
import { compileAsync } from 'sass'
import { logger } from './utils/logger'
import { fileURLToPath } from 'node:url'

const _dirname = fileURLToPath(new URL('.', import.meta.url))

const AOS_SCSS_ENTRY = resolve(_dirname, './../src/plugins/aos/scss/index.scss')
const AOS_SCSS_OUTPUT_DIR = resolve(_dirname, './../dist/css')
const AOS_SCSS_OUTPUT = resolve(_dirname, './../dist/css/aos.css')

export const compileScss = async () => {
  try {
    const result = await compileAsync(AOS_SCSS_ENTRY, {
      style: 'compressed',
      verbose: true,
    })

    const cssPrefixed = await postcss([autoprefixer]).process(result.css, {
      from: AOS_SCSS_ENTRY,
      to: AOS_SCSS_OUTPUT,
    })

    const hasCssDir = existsSync(AOS_SCSS_OUTPUT_DIR)

    if (!hasCssDir) {
      mkdirSync(AOS_SCSS_OUTPUT_DIR)
    }

    writeFileSync(AOS_SCSS_OUTPUT, cssPrefixed.css)

    logger.success('[BuildScss] ✅ css compiled')
  } catch (error) {
    logger.error(`[BuildScss] 🔴 error while compiling scss`, error)
  }
}
