import { EmployeeService } from "./../employee.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "employee-detail",
  template: `
    <h2>Author Detail</h2>
    <h3>{{ errorMsg }}</h3>
    <ul *ngFor="let employee of employees">
      <li>
        {{ employee.id }}. {{ employee.title }} - {{ employee.firstName }}
        {{ employee.lastName }} | {{ employee.email }} |
        {{ employee.description }}
      </li>
    </ul>
  `,
  styles: []
})
export class EmployeeDetailComponent implements OnInit {
  public employees = [];
  public errorMsg;

  constructor(private _employeeService: EmployeeService) {}

  ngOnInit() {
    this._employeeService.getEmployees().subscribe(
      data => (this.employees = data),
      error => (this.errorMsg = error)
    );
  }
}
