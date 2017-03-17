function padStart(baseStr, width, padChar) {
  padChar = padChar || '0';
  baseStr = '' + baseStr;
  return baseStr.length >= width ? baseStr : new Array(width - baseStr.length + 1).join(padChar) + baseStr;
};

export default padStart