import { readCurrentScriptDataAttribute } from './readCurrentScriptDataAttribute';

export const readCoppa = (): boolean => {
  return Boolean(readCurrentScriptDataAttribute('coppa'))
}
