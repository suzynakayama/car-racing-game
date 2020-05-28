import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import socketIOClient from "socket.io-client";
import './Login.scss';

export const Login = () => {
  let socket;
  const [name, setName] = useState("");
  const [input, setInput] = useState("");

  const handleChange = evt => setInput(evt.currentTarget.value);
  
  const handleSubmit = evt => {
    evt.preventDefault();
    console.log(input)
    setName(input);
    setInput("")
  }

  if (name) {
    socket = socketIOClient('http://localhost:3030');
    socket.emit('user_joined', name);
  }

  return (
    <div className="login">
      <section className="login-section">
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">What's you name?</label>
            <input id="name" type="text" onChange={ handleChange } value={ input }/>
            <Link to='/'>Join Game!</Link>
        </form>
      </section>
    </div>
  )
}
