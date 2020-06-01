import React, { useState } from 'react';
import socketIOClient from "socket.io-client";
import './Login.scss';
import { UserContext, GameContext, initialUser, initialGame } from "../../Context";

export const Login = ({hist}) => {
  let socket;
  const [name, setName] = useState("");
  const [input, setInput] = useState("");

  const handleChange = evt => setInput(evt.currentTarget.value);
  
  const handleSubmit = (evt, user, setUser) => {
    evt.preventDefault();
    console.log(input)
    setName(input);
    setInput("");
    setUser({
      id: "1",
      name: name,
      points: "10",
      color: "red"
    })
    hist.push('/')
  }

  if (name) {
    socket = socketIOClient('http://localhost:3030');
    socket.emit('user_joined', name);
  }

  return (
    <UserContext.Consumer>
      { ({ user, setUser }) => (
        <div className="login">
          <section className="login-section">
            <form onSubmit={ handleSubmit }>
              <label htmlFor="name">What's you name?</label>
              <input
                id="name"
                type="text"
                onChange={ (evt) => handleChange(evt, user, setUser) }
                value={ input }
              />
              <button onClick={ handleSubmit } className="login-btn" to="/">
                Join Game!
            </button>
            </form>
          </section>
        </div>
      ) }
    </UserContext.Consumer>
  );
}
