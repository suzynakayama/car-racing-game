import React from "react";
import "./Leaderboard.scss";

const Leaderboard = ({ colors }) => {
	return (
		<div className="board">
			<h1 className="board__title">LeaderBoard</h1>
			<ul className="board__ul">
				{colors.map((clr) => (
					<li className="board__li">
						{clr} <span>PONTOS</span>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Leaderboard;
