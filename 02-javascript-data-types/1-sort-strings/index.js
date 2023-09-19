/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */

const localeEn = "en-US";
const localeRu = "ru-RU";

export function sortStrings(arr, param = 'asc') {
  let copyArray = [...arr];

  switch (param) {
  case "desc":
    return copyArray.sort((a, b) => b.localeCompare(a, [localeRu + "-u-kf-upper", localeEn + "-u-kf-upper"], {sensitivity: 'case'}));
  case "asc":
    return copyArray.sort((a, b) => a.localeCompare(b, [localeRu + "-u-kf-upper", localeEn + "-u-kf-upper"], {sensitivity: 'case'}));
  default:
    return arr; // unknown criteria neither "asc" or "desc" then return with not sorted array
  }
}

