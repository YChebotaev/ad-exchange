import { readCurrentScriptDataAttribute } from './readCurrentScriptDataAttribute';

export const readHasPrivacyPolicy = (): boolean => {
  return Boolean(readCurrentScriptDataAttribute('privacyPolicy'))
}
