export const InputFormat = formatToParse => {
  const isCustom = formatToParse.startsWith('//')

  return {
    isCustom,
    getNumbersToParse: () => {
      return isCustom ? formatToParse.split('\\n')[1].trim() : formatToParse
    },
    getDelimitersToParse: () => {
      return isCustom
        ? formatToParse
            .split('\\n')[0]
            .replace('//', '')
            .trim()
        : ''
    }
  }
}
