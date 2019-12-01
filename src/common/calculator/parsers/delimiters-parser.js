export const parseDelimiters = inputFormat => {
  const DEFAULT_DELIMITERS = [',', '\\n']

  if (inputFormat.isCustom) {
    return inputFormat
      .getDelimitersToParse()
      .replace(/^\[/, '')
      .replace(/\]$/, '')
      .split('][')
  }

  return DEFAULT_DELIMITERS
}
