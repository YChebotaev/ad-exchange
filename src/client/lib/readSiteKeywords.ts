export const readSiteKeywords = (): string[] => {
  const keywords = []
  const metaElements = document.getElementsByTagName('meta')
  for (let metaElement of metaElements) {
    const name = metaElement.getAttribute('name')
    if (name === 'keywords') {
      const content = metaElement.getAttribute('content')
      keywords.push(...content.split(/\s+/))
    }
  }
  return keywords
}
