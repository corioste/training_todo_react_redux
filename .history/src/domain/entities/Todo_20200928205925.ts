export class Todo {
    id: number;
    task: string;
    isDone: boolean;
  
    constructor(id: number, task: string, isDone: boolean) {
      this.id = id;
      this.task = task;
      this.isDone = isDone;
    }
  }
  