import React from 'react';
import history from './history';



export default class Links extends React.Component {

  onLogOut = () => {
    return history.push('/signup')
  } 
  
  render (){
      return (<div> 
      
      
      <div> Link here </div>
      
      <button onClick={this.onLogOut()}> LogOut</button>
      
      
      </div>);
    }
  } 



