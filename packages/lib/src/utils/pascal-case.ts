import { capitalize } from './capitalize'
import { camelCase } from './camel-case'

export function pascalCase(str: string) {
  return capitalize(camelCase(str))
}
