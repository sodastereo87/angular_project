import { Component, OnInit } from '@angular/core';
import {Todo} from '../../models/Todos'


@Component ({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  todos:Todo[];

  constructor() { }

  ngOnInit() { 
    this.todos= [
      {
        id:1,
        title:'Microsoft /',
        firstName: 'Bill',
        lastName: 'Gates /',
        email: 'bill@microsoft.com',
      },
      {
        id:2,
        title:'Facebook /',
        firstName: 'Mark',
        lastName: 'Zuckerberg /',
        email: 'mark@facebook.com',
      },
       {
        id:3,
        title:'Amazon /',
        firstName: 'Jeff',
        lastName: 'Bezos /',
        email: 'jeff@amazon.com',
      }

    ]

  }

}
