import { Component, OnInit } from '@angular/core';

class Todo {
  title: string;
  done: boolean;

  constructor(title: string, done: boolean) {
    this.title = title;
    this.done = done;
  }
}

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  todos: Todo[] = [];

  constructor() { }

  ngOnInit(): void {
    let observable = new Todo("Observables", false);
    let di = new Todo("Dependency Injection", false);
    let db = new Todo("Data Binding", false);

    this.todos.push(observable);
    this.todos.push(di);
    this.todos.push(db);
  }

}
