import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';
import {EmployeeService} from './employee.service';
import {EmployeeDetailComponent} from './employee-detail.component';
import {Employee} from './employee';

@Component({
  selector: 'my-employees',
  templateUrl: 'app/employees.component.html',
  styleUrls: ['app/employees.component.css'],
  directives: [EmployeeDetailComponent]
})
export class EmployeesComponent implements OnInit {
  public employees: Employee[];
  public selectedEmployee: Employee;
  
  private loadComponent = false;
    loadMyChildComponent(employee1: Employee){
       this.selectedEmployee1 = employee1;
    }

  constructor(private _employeeService: EmployeeService, private _router: Router) { }

  getEmployees() {
    this._employeeService.getEmployees().then(employees => this.employees = employees);
  }

  /*gotoDetail() {
    this._router.navigate(['EmployeeDetail', { id: this.selectedEmployee.id }]);
  }*/

  ngOnInit() {
    this.getEmployees();
  }

  onSelect(employee: Employee) { this.selectedEmployee = employee; }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/