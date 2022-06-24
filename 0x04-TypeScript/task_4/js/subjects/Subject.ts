/// <reference path="Teacher.ts" />

namespace Subjects {
    export class Subject{
        teacher: Teacher;

        setTeacher(obj: Teacher): void {
            this.teacher = obj
        }
    }
}
