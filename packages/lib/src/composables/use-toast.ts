import { injectStrict } from '../utils/inject-strict'
import type { ToasterHandler } from '../plugins/toaster'

export const useToast = () => {
  return injectStrict<ToasterHandler>('toast')
}
