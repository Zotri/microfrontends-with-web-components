import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Employee } from "../employee";
import { EmployeeService } from "../employee.service";

@Component({
	selector: "app-employee-list",
	templateUrl: "./employee-list.component.html",
	styleUrls: ["./employee-list.component.css"]
})
export class EmployeeListComponent implements OnInit {
	//@ts-ignore
	employees: Employee[];
	//@ts-ignore
	employee: number;
	//@ts-ignore
	entry: number;
	options: Array<string> = ["check", "uncheck"];
	constructor(
		private employeeService: EmployeeService,
		private router: Router
	) {}

	ngOnInit(): void {
		this.getEmployees();
	}

	private getEmployees() {
		this.employeeService.getEmployeesList().subscribe((data: any) => {
			console.log("data", data);
			this.employees = data;
		});
	}

	updateEmployeeInformations(id: number) {
		console.log("update clicked");
		this.router.navigate(["update-employee", id]);
	}
}
