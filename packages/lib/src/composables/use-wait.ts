import { injectStrict } from '../utils/inject-strict'
import type { WaitHandler } from '../plugins/wait'

export const useWait = () => {
  return injectStrict<WaitHandler>('wait')
}
