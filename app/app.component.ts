import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {EmployeesComponent} from './employees.component';
import {EmployeeDetailComponent} from './employee-detail.component';
import {DashboardComponent} from './dashboard.component';
import {EmployeeService} from './employee.service';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <a [routerLink]="['Dashboard']">Dashboard</a>
    <a [routerLink]="['Employees']">Employees</a>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['app/app.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [EmployeeService]
})
@RouteConfig([
  // {path: '/', redirectTo: ['Dashboard'] },
  {path: '/dashboard', name: 'Dashboard', component: DashboardComponent, useAsDefault: true},
  {path: '/employees', name: 'Employees', component: EmployeesComponent}/*,
  {path: '/detail/:id', name: 'EmployeeDetail', component: EmployeeDetailComponent}*/
])
export class AppComponent {
  public title = 'Employee Manager';
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/