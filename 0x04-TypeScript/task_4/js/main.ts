/// <reference path="./subjects/Subject.ts" />
/// <reference path="./subjects/Cpp.ts" />
/// <reference path="./subjects/React.ts" />
/// <reference path="./subjects/Java.ts" />
/// <reference path="./subjects/Teacher.ts" />

const cTeacher: Subjects.Teacher = {firstName: 'jack', lastName: 'adams', experienceTeachingC: 10}
const cpp = new Subjects.Cpp();
const react = new Subjects.React();
const java = new Subjects.Java();

console.log('C++')
cpp.setTeacher(cTeacher)
console.log(cpp.getRequirements())
console.log(cpp.getAvailableTeacher())

console.log('Java')
java.setTeacher(cTeacher)
console.log(java.getRequirements())
console.log(java.getAvailableTeacher())

console.log('React')
react.setTeacher(cTeacher)
console.log(react.getRequirements())
console.log(react.getAvailableTeacher())
