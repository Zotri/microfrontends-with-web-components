import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { EmployeeListComponent } from "./employee-list/employee-list.component";
import { HttpClientModule } from "@angular/common/http";
import { Injector } from "@angular/core";
import { createCustomElement } from "@angular/elements";
import { UpdateEmployeeComponent } from "./update-employee/update-employee.component";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
	declarations: [AppComponent, EmployeeListComponent, UpdateEmployeeComponent],
	imports: [
		AppRoutingModule,
		HttpClientModule,
		CommonModule,
		BrowserModule,
		FormsModule
	],
	providers: [],
	bootstrap: [AppComponent, EmployeeListComponent],
	schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
	constructor(private injector: Injector) {
		const el = createCustomElement(EmployeeListComponent, { injector });
		customElements.define("list-employee-component", el);
	}
	ngDoBootstrap() {}
}
