import { Component } from '@angular/core';
import {EmployeeServiceService} from './employee-service.service';
import { EmployeeDetails } from './employee-details';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [EmployeeServiceService]
})
export class AppComponent {
	constructor(private employeeService: EmployeeServiceService) {
		
	}
  
	newEmployee: EmployeeDetails = new EmployeeDetails();
	  
	addEmployee() {
		this.employeeService.addEmployee(this.newEmployee);
		this.newEmployee = new EmployeeDetails();
	}
  
	deleteEmployee(employee) {
		this.employeeService.deleteEmployee(employee.employeeId);
	}
}
