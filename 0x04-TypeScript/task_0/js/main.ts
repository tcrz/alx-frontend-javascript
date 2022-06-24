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

const table = document.createElement('table');
const tbody = document.createElement('tbody');
const labelrow = document.createElement('tr');
const label1 = document.createElement('th');
const label2 = document.createElement('th');
label1.textContent = 'Name';
label2.textContent = 'Location';
table.appendChild(label1)
table.appendChild(label2)


for (const student of studentsArr) {
  const row = document.createElement('tr');
  const nameField = document.createElement('td');
  const locationField = document.createElement('td');
  nameField.textContent = student.firstName;
  locationField.textContent = student.location;
  row.appendChild(nameField);
  row.appendChild(locationField);
  tbody.appendChild(row);
}
table.appendChild(tbody);
document.body.appendChild(table);
