export default function getStudentIdSum(arrayOfObjects) {
  if (!Array.isArray(arrayOfObjects)) {
    return [];
  }
  return arrayOfObjects.map((object) => object.id).reduce((prev, curr) => prev + curr);
  // console.log(arrayOfObjects)
}
