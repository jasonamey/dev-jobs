export function searchArrayOfObjectsForTextInValue(arr, value) {
  const strValue = String(value).toLowerCase();
  return arr.filter((obj) =>
    Object.entries(obj).some((item) => {
      return String(item[1]).toLowerCase().indexOf(strValue) !== -1;
    })
  );
}
export function searchArrayForValueOfKey(arr, value, key) {
  const strValue = String(value).toLowerCase();
  return arr.filter((item) => {
    return String(item[key]).toLowerCase().indexOf(strValue) !== -1;
  });
}
