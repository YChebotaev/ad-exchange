import { readCurrentScriptDataAttribute } from './readCurrentScriptDataAttribute';

export const readGdrp = (): boolean => {
  return Boolean(readCurrentScriptDataAttribute('grdp'))
}
