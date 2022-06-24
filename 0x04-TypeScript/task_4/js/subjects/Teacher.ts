namespace Subjects {
  export interface Teacher {
    firstName: string;
    lastName: string;
  }

  export class Test {
    name:string;
    constructor(name:string){
      this.name = name
    }
  }
}
