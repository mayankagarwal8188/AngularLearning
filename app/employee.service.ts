import {Injectable} from 'angular2/core';
import {EMPLOYEES} from './mock-employees';

@Injectable()
export class EmployeeService {
	getEmployees() {
		return Promise.resolve(EMPLOYEES);
	}

	getEmployee(id: number) {
    return Promise.resolve(EMPLOYEES)
      .then(employees => employees.filter(h => h.id === id)[0]);
	}
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/