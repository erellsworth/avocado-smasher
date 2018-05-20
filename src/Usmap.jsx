import React, { Component } from 'react';
import states from './us-states.json';

class Usmap extends Component {
  stateClicked(state){
    console.log(state);
  }
  render() {
    return (
        <div id="us_map">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 959 593">
          <title>United State of Avocados</title>
          <g id="outlines">
            {states.map((state, index)=>{
              return <path key={index} onClick={this.stateClicked.bind(this,state)} d={state.dimensions}/>
            })}
          <path onClick={this.mapClicked} id="frames" fill="none" stroke="#A9A9A9" d="M215,493v55l36,45 M0,425h147l68,68h85l54,54v46"/>
          </g>
          </svg>
        </div>
    );
  }
}

export default Usmap;