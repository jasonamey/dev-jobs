export function searchArrayOfObjectsForTextInValue(arr, value) {
  let str = String(value).toLowerCase();
  return arr.filter((o) =>
    Object.entries(o).some((item) => {
      return String(item[1]).toLowerCase().indexOf(str) !== -1;
    })
  );
}
export function searchArrayForValueOfKey(arr, value, key) {
  value = String(value).toLowerCase();
  return arr.filter((item) => {
    return String(item[key]).toLowerCase().indexOf(value) !== -1;
  });
}
