import React, { useState } from 'react';
import './Login.scss';

export const Login = () => {
  const [name, setName] = useState("");
  const [input, setInput] = useState("");

  const handleChange = evt => setInput(evt.currentTarget.value);
  
  const handleSubmit = evt => {
    evt.preventDefault();
    console.log(input)
    setName(input);
    setInput("")
  }

  return (
    <div className="login">
      <section className="login-section">
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">What's you name?</label>
            <input id="name" type="text" onChange={ handleChange } value={ input }/>
          
        </form>
      </section>
    </div>
  )
}
