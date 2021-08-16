import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Employee } from "./employee";

// to implement the connection to Rest api and then inject this class to the Web Component
@Injectable({
	providedIn: "root"
})
export class EmployeeService {
	private baseUrl = "http://localhost:8080/api/employees";

	constructor(private httpClient: HttpClient) {}
	/*
*
* get() {
    return this.httpClient.get(this.baseUrl)
  }
* */

	getEmployeesList(): Observable<Employee[]> {
		return this.httpClient.get<Employee[]>(`${this.baseUrl}/all`);
	}

	// updateEmployeeListEntry(): Observable<Employee> {
	// 	return;
	// 	// return this.httpClient.put<Employee>(`${"http://localhost:8080/api/employees/employee/information-update/"}`+${Employee })
	// }

	getEmployeeById(id: number): Observable<Employee> {
		return this.httpClient.get<Employee>(
			`${this.baseUrl}/employee/information-update/${id}`
		);
	}

	updateEmployee(id: number, employee: Employee): Observable<Object> {
		return this.httpClient.put(
			`${this.baseUrl}/employee/information-update/${id}`,
			employee
		);
	}
}
