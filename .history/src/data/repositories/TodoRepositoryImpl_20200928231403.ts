import { Todo } from "../../domain/entities/Todo";
import { TodoRepository } from "../../domain/repositories/TodoRepository";

class TodoDTO {
    id: number = 0;
    task: string = "";
    isDone: boolean = false;
  }

  let todoList: Todo[] = []
  
  export class TodoRepositoryImpl implements TodoRepository {
  
    GetTodo(): Todo[] {

        var jsonString = JSON.stringify(todoList)
        var res = JSON.parse(jsonString)

        return res.map((todo: TodoDTO) => new Todo(todo.id,todo.task,todo.isDone));
    }

    CreateTodo(data:Todo): Todo[]{
        todoList.push(data)

        var jsonString = JSON.stringify(todoList)
        var res = JSON.parse(jsonString)
        
        return res.map((todo: TodoDTO) => new Todo(todo.id,todo.task,todo.isDone));
    }

    UpdateTodo(data:Todo): Todo[]{
        console.log(data)
    }

    DeleteTodo(data:Todo): Todo[]{
        console.log(data)
    }
  }
  