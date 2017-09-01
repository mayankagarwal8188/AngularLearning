import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';
import {Employee} from './employee';
import {EmployeeService} from './employee.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: 'app/dashboard.component.html',
  styleUrls: ['app/dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public employees: Employee[] = [];

  constructor(private _employeeService: EmployeeService, private _router: Router) { }

  ngOnInit() {
    this._employeeService.getEmployees().then(employees => this.employees = employees.slice(1,5));
  }

  gotoDetail(employee: Employee) {
    this._router.navigate(['EmployeeDetail', { id: employee.id }]);
  }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/