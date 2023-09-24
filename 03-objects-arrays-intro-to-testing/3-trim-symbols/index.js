/**
 * trimSymbols - removes consecutive identical symbols if they quantity bigger that size
 * @param {string} string - the initial string
 * @param {number} size - the allowed size of consecutive identical symbols
 * @returns {string} - the new string without extra symbols according passed size
 * example: trimSymbols('xxxaaxx', 1)
 */
export function trimSymbols(string, size) {
  let count = 0;
  let tmpChar = "";
  let resultStr = "";

  if (size === 0) {
    return resultStr;
  }

  for (const char of string) {
    if (char === tmpChar) {
      if (count >= size) {
        continue;
      }

      count++;
      resultStr += char;
      continue;
    }

    tmpChar = char;
    resultStr += char;
    count = 1;
  }

  return resultStr;
}
