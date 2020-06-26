import React from 'react';
import { Link } from 'react-router-dom';


export default class Signup extends React.Component {
    render (){
      return (<div> 
      
      
       <div>Sign up here or </div>
       <Link to="/login"> login here</Link>    
      </div>);
    }
  } 