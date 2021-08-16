import React from "react";
import ReactDOM from "react-dom";
import "./fragment.css";
import Button from "./Button";
import EmployeeView from "./EmployeeView";

class ViewButton extends HTMLElement {
	static get observedAttributes() {
		return ["label", "color", "id", "employee"];
	}
	connectedCallback() {
		this.setAttribute("data-version", `Team C (React v${React.version})`);
		this.render();
		this.addEventListener("view-button-click", this.handleNavigation);
	}
	attributeChangedCallback(name, oldVal, newVal) {
		this.render();
	}
	render() {
		const label = this.getAttribute("label");
		const color = this.getAttribute("color");

		ReactDOM.render(<Button label={label} color={color} />, this);
	}

	handleNavigation(e) {
		this.renderViewPage();
	}
	renderViewPage() {
		const employee = this.getAttribute("employee");

		if (employee) {
			ReactDOM.render(<EmployeeView employee={employee} />, this);
			setTimeout(() => {
				this.render();
			}, 3000);
		}
	}
	disconnectedCallback() {
		ReactDOM.unmountComponentAtNode(this.el);
		this.removeEventListener("view-button-click", this.handleNavigation);
	}
}
window.customElements.define("view-button-react", ViewButton);

console.log(`Team C React  - React v${React.version}`);
