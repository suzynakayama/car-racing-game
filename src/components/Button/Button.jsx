import React from "react";
import "./Button.scss";

const Button = ({ type }) => {
	const handleStart = () => {};

	const handleReset = () => {};

	return (
		<button
			onClick={type === "start" ? handleStart : handleReset}
			style={{ backgroundColor: type === "start" ? "limegreen" : "red" }}
		>
			{type}
		</button>
	);
};

export default Button;
