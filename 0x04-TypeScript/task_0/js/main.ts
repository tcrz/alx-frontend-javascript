interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'Frank',
  lastName: 'Bauer',
  age: 22,
  location: 'Canada'
}

const student2: Student = {
  firstName: 'Jessica',
  lastName: 'Ambers',
  age: 22,
  location: 'Austrialia'
}

const studentsArr: Student[] = [student1, student2]
let table = ''
for (const student of studentsArr) {
  table += `${student.firstName} ${student.location}\n`
}
console.log(table)