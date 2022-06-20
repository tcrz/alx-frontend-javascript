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
  let setList = Array.from(set);
  setList = setList.filter((str) => str.startsWith(startString));
  let concatStr = '';
  for (const [idx, str] of setList.entries()) {
    if (str.startsWith(startString)) {
      const splitstr = str.slice(startStringLen);
      if (!setList[idx + 1]) {
        concatStr += splitstr;
      } else {
        concatStr += `${splitstr}-`;
      }
    }
  }
  return concatStr;
}
