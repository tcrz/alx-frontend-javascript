export default function iterateThroughObject(reportWithIterator) {
  let names = '';
  for (const [idx, value] of reportWithIterator.entries()) {
    if (idx !== (reportWithIterator.length - 1)) {
      names += `${value} | `;
    } else {
      names += value;
    }
  }
  return names;
}
