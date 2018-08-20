import React from 'react';

class Card extends React.Component {
  constructor(){
    super();
    this.state = {
      status: "face-down"
    }
  }


  render(){
    return(
      <h1>{this.state.status}</h1>
    )
  }
}

export default Card
