/* eslint no-underscore-dangle: ["error", { "allow": ["_name", "_length", "_students"] }] */
export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof (name) === 'string') {
      this._name = name;
    } else {
      throw TypeError('Name must be a string');
    }
    if (typeof (length) === 'number') {
      this._length = length;
    } else {
      throw TypeError('Length must be a string');
    }
    if (students instanceof Array) {
      this._students = students;
    } else {
      throw TypeError('Students must be an array');
    }
  }

  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get students() {
    return this._students;
  }

  set name(newname) {
    this._name = newname;
  }

  set length(newlength) {
    this._length = newlength;
  }

  set students(newstudents) {
    this._students = newstudents;
  }
}
