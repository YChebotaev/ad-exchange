export const readConnectionType = (): number => {
  if ('connection' in navigator) {
    // @ts-ignore
    const { effectiveType } = navigator.connection
    switch (effectiveType) {
      case '2g':
        return 4; // Cellular Network - 2G
      case '3g':
        return 5; // Cellular Network - 3G
      case '4g':
        return 6; // Cellular Network - 4G
      default:
        return 0;
    }
  }
  return 0
}
