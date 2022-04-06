import { Component, VERSION } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { TODOS } from './interfaces';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
  providers: [ApiService]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  todoList$: Observable<Array<TODOS>>;
  constructor(private api: ApiService) {
    this.getListTodo()
  }

  getListTodo() {
    this.todoList$ = this.api.getTodos();
  }
}
