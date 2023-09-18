/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */

let regExpEn = /[a-zA-z]/;
let regExpRu = /[а-яА-ЯЁё]/;

export function sortStrings(arr, param = 'asc') {
  let copyArray = [...arr];
  let firstCharacterOfFirstElem = copyArray[0].charAt(0);

  let locale = getLocale(firstCharacterOfFirstElem);
  if (locale === "") {
    return arr;
  }

  switch (param) {
  case "desc":
    return copyArray.sort((a, b) => b.localeCompare(a, locale + "-u-kf-upper", {sensitivity: 'case'}));
  case "asc":
    return copyArray.sort((a, b) => a.localeCompare(b, locale + "-u-kf-upper", {sensitivity: 'case'}));
  default:
    return arr; // unknown criteria neither "asc" or "desc" then return with not sorted array
  }
}

function getLocale(word) {
  let matchEn = regExpEn.test(word);
  if (matchEn === true) {
    return "en-US"; // determined 'en-US' locale
  }

  let matchRu = regExpRu.test(word);
  if (matchRu === true) {
    return "ru-RU"; // determined 'ru-RU' locale
  }

  return "";
}
