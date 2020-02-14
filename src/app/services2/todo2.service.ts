import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Todo } from "../models/Todos";

@Injectable({
  providedIn: "root"
})

// get and export fake data from jsonplaceholder for posts page
export class TodoService2 {
  todosUrl: string = "http://jsonplaceholder.typicode.com/comments";
  todosLimit = "?_limit=10";

  constructor(private http: HttpClient) {}

  // Get Todos
  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.todosUrl}${this.todosLimit}`);
  }
}
