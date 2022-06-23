/// <reference path="Teacher.ts" />

namespace Subjects {
    export class Subject{
        teacher: Teacher;

        constructor(teacher: Teacher){
            this.teacher = teacher
        }

        setTeacher(obj: Teacher): void {
            this.teacher = obj
        }
    }
}