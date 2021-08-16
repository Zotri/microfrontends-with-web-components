import React, { useRef } from "react";
import "./fragment.css";

const Button = ({ label, color }) => {
	const rootElement = useRef();

	const handleClick = () => {
		console.log("event dispatched");
		rootElement.current.dispatchEvent(
			new CustomEvent("view-button-click", {
				detail: {
					description: "button-view"
				},
				bubbles: true,
				cancelable: true,
				composed: true
			})
		);
	};

	return (
		<div>
			<button
				ref={rootElement}
				style={{ background: color }}
				type='button'
				onClick={handleClick}>
				{label}
			</button>
		</div>
	);
};

export default Button;
