/*
Create a function named cleanSet that returns a string of all the set values
that start with a specific string (startString).
It accepts two arguments: a set (Set) and a startString (String).
When a value starts with startString you only append the rest of the string.
The string contains all the values of the set separated by -.
*/

export default function cleanSet(set, startString) {
  if (startString === '') {
    return startString;
  }
  const startStringLen = startString.length;
  let concatStr = '';
  for (const str of set) {
    if (str.startsWith(startString)) {
      const splitstr = str.slice(startStringLen);
      concatStr += `${splitstr}-`;
    }
  }
  return concatStr.slice(0, -1);
}
