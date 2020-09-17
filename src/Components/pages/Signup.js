import React from "react";
import {Link, useHistory} from 'react-router-dom';
import { useState } from 'react';
import M from 'materialize-css'



const Signup = () => {
  const history = useHistory();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signUpClick = () => {
    if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)) {
      return M.toast({html: "Invalid email"});
    }
    fetch('/signup', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name,
        email,
        password
      })
    }).then(res=>res.json())
    .then(data=>{
      if(data.error) {
        M.toast({html: data.error})
      }
      else {
        M.toast({html: data.message})
        history.push('/login')
      }
    })
  }

  return (
    <div className='myCard'>
      <div class="card auth-card">
        <h2 className='brand-logo'>Instagram</h2>
        <input value={name} onChange={e => setName(e.target.value)} type="text" placeholder="name" />
        <input value={email} onChange={e => setEmail(e.target.value)} type="text" placeholder="email" />
        <input value={password} onChange={e => setPassword(e.target.value)} type="text" placeholder="password" />
        <button
          class="btn waves-effect waves-light #90caf9 blue lighten-3
          "
          onClick={()=> signUpClick()}
        >
          Signup
        </button>
        <h5>
            <Link to='/login'>Already a user?</Link>
        </h5>
      </div>
    </div>
  );
};

export default Signup;