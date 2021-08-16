import React from "react";
import ReactDOM from "react-dom";
import { MarkBox } from "./MarkBox";

class ReactMarkBox extends HTMLElement {
	static get observedAttributes() {
		return ["id", "entry", "name", "isChecked", "disabled"];
	}
	connectedCallback() {
		this.setAttribute("data-version", `Team C (React v${React.version})`);
		this.renderFirstMark();
		this.addEventListener("list-mark-box-click", this.handleNavigation);
	}
	attributeChangedCallback(name, oldVal, newVal) {
		this.renderFirstMark();
	}
	renderFirstMark() {
		const id = this.getAttribute("id");
		const entry = this.getAttribute("entry");
		const name = this.getAttribute("name");
		const isChecked = this.getAttribute("isChecked");
		const disabled = this.getAttribute("disabled");

		ReactDOM.render(
			<MarkBox id={id} entry={entry} name={name} isChecked={false} />,
			this
		);
	}

	set disabled(val) {
		if (val) {
			this.setAttribute("disabled", "true");
		} else {
			this.removeAttribute("disabled");
		}
	}

	get disabled() {
		return this.getAttribute("disabled");
	}

	handleNavigation(e) {
		const markElement = this.querySelector("#mark-mark");
		const unmarkElement = this.querySelector("#unmark-unmark");
		const entry = this.getAttribute("entry");
		console.log("e. ", e);

		console.log("e.target", e.srcElement.id);
		console.log(
			"e.srcElement.id === unmark-unmark",
			e.srcElement.id === "unmark-unmark"
		);
		console.log("try", document.querySelector(".input#mark-mark"));
		if (e.srcElement.id !== "unmark-unmark") {
			markElement.dispatchEvent(
				new CustomEvent("list-box-clicked", {
					detail: {
						description: `list box clicked once for employee ${entry}`,
						employee: entry
					},
					bubbles: true,
					cancelable: true,
					composed: true
				})
			);
			ReactDOM.render(
				<MarkBox
					id='unmark-unmark'
					entry={entry}
					name='unmark'
					isChecked={false}
				/>,
				this
			);
		} else {
			unmarkElement.dispatchEvent(
				new CustomEvent("list-box-unclicked", {
					detail: {
						description: `list box clicked once for employee ${entry}`,
						employee: entry
					},
					bubbles: true,
					cancelable: true,
					composed: true
				})
			);
			ReactDOM.render(
				<MarkBox id='mark-mark' entry={entry} name='mark' isChecked={false} />,
				this
			);
		}
	}

	disconnectedCallback() {
		ReactDOM.unmountComponentAtNode(this.el);
		this.removeEventListener("list-box-click", this.handleNavigation);
		this.removeEventListener("mark-box-is-clicked", this.handleNavigation);
	}
}

window.customElements.define("react-mark-element", ReactMarkBox);
console.log(`Team C React  - React v${React.version}`);
