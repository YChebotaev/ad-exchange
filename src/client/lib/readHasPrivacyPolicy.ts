export const readHasPrivacyPolicy = (): boolean => {
  if (document.currentScript) {
    const rawValue = document.currentScript.dataset.privacyPolicy
    try {
      return Boolean(
        JSON.parse(
          rawValue
        )
      )
    } catch (error) {
      if (rawValue != '') {
        console.info(error)
      }
    }
  }
  return false
}
