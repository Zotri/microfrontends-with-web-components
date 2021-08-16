const template = document.createElement("template");
template.innerHTML = /* html */ `
<style>
    count-marks{
        display: block;
        font-size: 20px;
    }
</style>
    <span></span>
    `;

class CountMarks extends HTMLElement {
	constructor() {
		super();
		this.counter = 0;
	}
	static get observedAttributes() {
		return ["id", "counter"];
	}
	connectedCallback() {
		this.render();

		// this.appendChild(template.content.cloneNode(true));
	}
	render() {
		const id = this.getAttribute("id");
		const unmarkElement = this.querySelector("#unmark-unmark");

		const spanCounter = document.querySelector(`#${id}`);
		spanCounter.setAttribute("counter", this.counter);
		this.innerHTML = this.counter;

		window.addEventListener("list-box-clicked", () => {
			this.counter++;
			//this.innerHTML = this.counter;
			spanCounter.textContent = this.counter;
		});

		window.addEventListener("list-box-unclicked", () => {
			this.counter = this.counter - 1;
			spanCounter.textContent = this.counter;
		});
	}

	attributeChangedCallback(name, oldVal, newVal) {
		// this.render();
		// if (name === "counter") {
		// 	this.counter = newVal;
		// }
		//this.render();
	}
	disconnectedCallback() {
		window.removeEventListener("list-mark-box-click", this.render);
		window.removeEventListener("list-box-unclick", this.render);
	}
}
customElements.define("count-marks", CountMarks);
