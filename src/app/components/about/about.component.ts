import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todos'
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})

export class AboutComponent implements OnInit {
todos:Todo[];

  constructor(private todoService:TodoService) { }

  ngOnInit() { 
    this.todoService.getTodos().subscribe(todos => {
      this.todos = todos;
    });

  }
}
