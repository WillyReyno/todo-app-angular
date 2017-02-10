import {Injectable} from '@angular/core';
import {Todo} from './todo';

@Injectable()
export class TodoDataService {

  /* Placeholder for last id
  to simulate automatic incrementing id's */
  lastId: number = 0;

  /* Placeholder for todos */
  todos: Todo[] = [];


  constructor() {
  }

  // Simulate POST /todos
  addTodo(todo: Todo): TodoDataService {
    if (!todo.id) {
      // auto-increment
      todo.id = ++this.lastId;
    }
    // add new one to todos
    this.todos.push(todo);
    return this;
  }

  // Simulate DELETE /todos/:id
  deleteTodoById(id: number): TodoDataService {
    // Reset todos to the same without the id passed as parameter
    this.todos = this.todos
      .filter(todo => todo.id !== id);
    return this;
  }

  // Simulate PUT /todos/:id
  updateTodoById(id: number, values: Object = {}): Todo {
    // Retrieve todo to update
    let todo = this.getTodoById(id);
    if (!todo) {
      return null;
    }
    // Insert les valeurs données dans l'objet (cible, source)
    Object.assign(todo, values);
    return todo;
  }

  // Simulate GET /todos
  getAllTodos(): Todo[] {
    return this.todos;
  }

  getRemainingTodos(): Todo[] {
    return this.todos
      .filter(todo => todo.complete === false)
  }

  // Simulate GET /todos/:id
  getTodoById(id: number): Todo {
    // Get todo matching the id
    return this.todos
      .filter(todo => todo.id === id)
      .pop();
  }

  // Toggle todo complete
  toggleTodoComplete(todo: Todo) {
    // Updating complete to reverse boolean
    let updatedTodo = this.updateTodoById(todo.id, {
      complete: !todo.complete
    });
    return updatedTodo;
  }
}
