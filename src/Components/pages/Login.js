import React from "react";
import {Link} from 'react-router-dom';

const Login = () => {
  return (
    <div className='myCard'>
      <div class="card auth-card">
        <h2 className='brand-logo'>Instagram</h2>
        <input type="text" placeholder="email" />
        <input type="text" placeholder="password" />
        <button
          class="btn waves-effect waves-light #90caf9 blue lighten-3
          "
        >
          LogIn
        </button>
        <h5>
            <Link to='/signup'>Don't have an account? Sign up today!</Link>
        </h5>
      </div>
    </div>
  );
};

export default Login;
