import {Component, OnInit} from 'angular2/core';
import {RouteParams} from 'angular2/router';
import {Employee} from './employee';
import {EmployeeService} from './employee.service';
import {Input} from 'angular2/core';

@Component({
  selector: 'my-employee-detail',
  templateUrl: 'app/employee-detail.component.html',
  styleUrls: ['app/employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {
  @Input() employee: any;

  constructor(private _employeeService: EmployeeService) {
  }

  ngOnInit() {
    /*if (!this.employee) {
      let id = +this._routeParams.get('id');
      this._employeeService.getEmployee(id).then(employee => this.employee = employee);
    }*/
  }

  goBack() {
    window.history.back();
  }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/