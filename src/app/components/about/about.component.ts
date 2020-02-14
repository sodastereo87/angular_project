import { Component, OnInit } from "@angular/core";
import { Todo } from "../../models/Todos";
import { TodoService2 } from "../../services2/todo2.service";

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.css"]
})
export class AboutComponent implements OnInit {
  todos: Todo[];

  constructor(private todoService: TodoService2) {}

  ngOnInit() {
    this.todoService.getTodos().subscribe(todos => {
      this.todos = todos;
    });
  }
}
