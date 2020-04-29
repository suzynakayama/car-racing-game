import React from "react";
import "./App.scss";
import Car from "./components/Car/Car";
import Button from "./components/Button/Button";
import Leaderboard from "./components/Leaderboard/Leaderboard";
import { Login } from "./pages/Login/Login";

// TODO
/*
// 1 - New home page for person to log in
2 - Add node, express, and socket io
3 - Create Context for colors and users
4 - Create logic for person to choose color for car
5 - Create logic for person press specific key to make the car go faster
6 - Create logic to update the leaderboard
7 - Victory message and sound and Play again option
*/

function App() {
	const colors = ["red", "blue", "green"];

	return (
		<div className="App">
			{/* <Leaderboard colors={colors} />
			<div className="btn-container">
				<Button type="start" />
				<Button type="restart" />
			</div>
			<div className="car-container">
				{colors.map((clr) => (
					<Car color={clr} />
				))}
			</div> */}
			<Login />
		</div>
	);
}

export default App;
