import type { App } from 'vue'

import { capitalize } from '../utils/capitalize'
import { currency } from '../utils/currency'
import { date } from '../utils/date'
import { number } from '../utils/number'
import { telephone } from '../utils/telephone'

const filters = {
  capitalize,
  currency,
  date,
  number,
  telephone,
}

export type Filters = typeof filters

export const plugin = {
  install(app: App) {
    app.provide('filters', filters)
  },
}
