// Tailwind CSS configuration (https://tailwindcss.com/docs/configuration)
import type { Config } from 'tailwindcss'
import { tailwindConfigBase } from './src/tailwindcss/tailwind.config'

export default <Config>{
  mode: 'build',
  presets: [tailwindConfigBase],
  content: {
    files: ['./src/**/*', '!src/components_tmp/**/*'],
    transform: {
      vue: (content) => {
        const regex = /<style[^>]*>([\S\s]*?)<\/style>/g
        // @ts-expect-error
        return content.replaceAll(regex, '')
      },
    },
  },
  prefix: 'maz-',
  corePlugins: {
    preflight: false,
    container: false,
  },
}
