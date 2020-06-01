import React from 'react'
import Leaderboard from '../../components/Leaderboard/Leaderboard';
import Button from '../../components/Button/Button';
import Car from '../../components/Car/Car';
import { UserContext, GameContext, initialUser, initialGame } from "../../Context";

const Main = () => {
  const colors = ["red", "blue", "green"];
  
	return (
		<UserContext.Consumer>
			{ ({ user, setUser }) => {
				console.log(user);
				return (<div>
					<Leaderboard colors={ colors } />
					<div className="btn-container">
						<Button type="start" />
						<Button type="restart" />
					</div>
					<div className="car-container">
						{ colors.map((clr) => (
							<Car color={ clr } />
						)) }
					</div>
				</div>
			)} }
    </UserContext.Consumer>
  );
}

export default Main
