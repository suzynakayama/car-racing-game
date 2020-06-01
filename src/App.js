import React from "react";
import "./App.scss";
import { Login } from "./pages/Login/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./pages/Main/Main";


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


	return (
    <div className="App">
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            render={({ history }) => <Main hist={history} />}
          />
            <Route
              path="/login"
              render={({ history }) => <Login hist={history} />}
            />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
