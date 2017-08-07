import { Injectable } from '@angular/core';
import { EmployeeDetails } from './employee-details';

@Injectable()
export class EmployeeServiceService {

	lastId: number = 0;
	employeeInstances: EmployeeDetails[] = [];

	constructor() {
	}

	// Simulate POST /todos
	addEmployee(employee: EmployeeDetails): EmployeeServiceService {
		if (!employee.employeeId) {
			employee.employeeId = ++this.lastId;
		}
		this.employeeInstances.push(employee);
		return this;
	}

	// Simulate DELETE /todos/:id
	deleteEmployee(id: number): EmployeeServiceService {
		this.employeeInstances = this.employeeInstances
			.filter(employee => employee.employeeId !== id);
		return this;
	}

}
