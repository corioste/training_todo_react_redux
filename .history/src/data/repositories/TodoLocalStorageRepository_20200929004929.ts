import { Todo } from "../../domain/entities/Todo";
import { TodoRepository } from "../../domain/repositories/TodoRepository";

class TodoDTO {
    id: number = 0;
    task: string = "";
    isDone: boolean = false;
}


export class TodoLocalStorageRepositoryImpl implements TodoRepository {

    GetTodo(): Todo[] {

        var jsonString = localStorage.getItem("todo")
        var res = JSON.parse(jsonString || '[]')

        return res.map((todo: TodoDTO) => new Todo(todo.id, todo.task, todo.isDone));
    }

    CreateTodo(data: Todo): Todo[] {

        var jsonString = localStorage.getItem("todos")
        var res = JSON.parse(jsonString || '[]')
        res.push(data)
        localStorage.setItem("todos", JSON.stringify(res))
        return res.map((todo: TodoDTO) => new Todo(todo.id, todo.task, todo.isDone));
    }

    UpdateTodo(data: Todo): Todo[] {
        var intData = parseInt(data.id.toString());
        for (let i = 0; i < todoList.length; i++) {
            if (intData === todoList[i].id){
                todoList[i].task = data.task
                todoList[i].isDone = data.isDone
              break;
            }
          }

        

        return res.map((todo: TodoDTO) => new Todo(todo.id, todo.task, todo.isDone));
    }

    DeleteTodo(data: Todo): Todo[] {

        var intData = parseInt(data.id.toString())
        for (let i = 0; i < todoList.length; i++) {
            if (intData === todoList[i].id) {
                todoList.splice(i, 1);
                break;
            }
        }

        var jsonString = localStorage.getItem("todos")
        var res = JSON.parse(jsonString || '[]')

        return res.map((todo: TodoDTO) => new Todo(todo.id, todo.task, todo.isDone));
    }
}
