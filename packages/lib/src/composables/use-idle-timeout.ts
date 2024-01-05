import {
  IdleTimeout,
  type IdleTimeoutCallback,
  type IdleTimeoutOptions,
} from '../utils/idle-timeout'

export const useIdleTimeout = ({
  callback,
  options,
}: {
  callback: IdleTimeoutCallback
  options?: IdleTimeoutOptions
}) => {
  return new IdleTimeout(callback, options)
}
