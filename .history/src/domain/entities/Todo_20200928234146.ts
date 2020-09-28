export class Todo {
    id: number;
    task: string;
    isDone: boolean;
    btnName: String;
  
    constructor(id: number, task: string, isDone: boolean, btnName: String) {
      this.id = id;
      this.task = task;
      this.isDone = isDone;
      this.btnName = btnName;
    }
  }
  