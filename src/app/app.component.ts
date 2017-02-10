import { Component } from '@angular/core';
import { Todo } from './todo';
import { TodoDataService } from './todo-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TodoDataService]
})
export class AppComponent {

  newTodo: Todo = new Todo();

  constructor(private todoDataService: TodoDataService) {
  }

  addTodo() {
    // Save current typed todo
    this.todoDataService.addTodo(this.newTodo);
    // Reset newTodo ?
    this.newTodo = new Todo();
  }

  toggleTodoComplete(todo) {
    // set chosen todo to true or false
    this.todoDataService.toggleTodoComplete(todo);
  }

  removeTodo(todo) {
    // delete a todo
    this.todoDataService.deleteTodoById(todo.id);
  }

  get todos() {
    // retrieve all todos
    return this.todoDataService.getAllTodos();
  }

  get remainingTodos() {
    return this.todoDataService.getRemainingTodos();
  }


}
