export class EmployeeDetails {
	employeeId: number;
	employeeName: string = '';

	//constructor to assign values to the object members
	constructor(values: Object = {}) {
		Object.assign(this, values);
	}
}
