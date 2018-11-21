export const readSiteIsAmp = (): boolean => {
  const htmlElement = document.getElementsByTagName('html')[0]
  return htmlElement.hasAttribute('⚡') || htmlElement.hasAttribute('amp')
}
