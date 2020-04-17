import React from "react";
import "./Car.scss";

const Car = ({ color }) => {
	return (
		<div className="car" style={{ backgroundColor: color }}>
			<div className="top"></div>
		</div>
	);
};

export default Car;
