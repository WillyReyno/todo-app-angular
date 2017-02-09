export class Todo {
  // Each instance will have an id, a title and a boolean "complete"
  id: number;
  title: string = '';
  complete: boolean = false;

  constructor(values: Object = {}) {
    /* Constructor logic letting us specify property values
    during instantiation to easily create new Todo */
    Object.assign(this, values);
  }
}
