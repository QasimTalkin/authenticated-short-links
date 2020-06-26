import React from 'react';
import { Link } from 'react-router-dom';

export default class Login extends React.Component {
    render (){
      return (<div>
        <Link to="/signup"> Sign up here</Link>    
      </div>);
    }
  }   