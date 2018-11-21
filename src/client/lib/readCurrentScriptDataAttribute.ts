export const readCurrentScriptDataAttribute = (dataAttributeName: string): any => {
  if (document.currentScript) {
    const rawValue = document.currentScript.dataset[dataAttributeName]
    try {
      return JSON.parse(rawValue)
    } catch (error) {
      if (rawValue != '') {
        console.info(error)
      }
    }
  }  
}
