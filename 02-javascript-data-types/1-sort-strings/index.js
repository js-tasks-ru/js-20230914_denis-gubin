/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */

const localeEn = "en-US";
const localeRu = "ru-RU";

export function sortStrings(arr, param = 'asc') {
  return [...arr].sort(compare(param));
}
function compare(setDirection) {
  if (setDirection === 'desc') {
    return compareDesc();
  }

  return compareAsc();
}

function compareAsc() {
  return function (a, b) {
    return a.localeCompare(b, [localeRu + "-u-kf-upper", localeEn + "-u-kf-upper"], {sensitivity: 'case'});
  };
}

function compareDesc() {
  return function (a, b) {
    return b.localeCompare(a, [localeRu + "-u-kf-upper", localeEn + "-u-kf-upper"], {sensitivity: 'case'});
  };
}

/*
Решение преподавателя:

function sortAsc(a, b) {
  return a.localeCompare(b, ['ru', 'en'], { caseFirst: 'upper' }))
}

function sortDesc(a, b) {
  return b.localeCompare(a, ['ru', 'en'], { caseFirst: 'upper' }));
}

export function sortStrings(arr, param = 'asc') {
  return [..arr].sort(param === 'asc' ? sortAsc : sortDesc);
};
 */
