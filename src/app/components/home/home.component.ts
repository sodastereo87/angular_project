import { Component, OnInit } from "@angular/core";
import { Todo } from "../../models/Todos";
import { TodoService } from "../../services/todo.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  todos: Todo[];

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.todoService.getTodos().subscribe(todos => {
      this.todos = todos;
    });
  }

  // sort data by id...date not provided by fake REST API server
  get sortData() {
    return this.todos.sort((a, b) => {
      return <any>new Date(b.id) - <any>new Date(a.id);
    });
  }
}
