import React from 'react';
import reduxComponent from '../reduxComponent';
import {setYear} from '../actions';

class Usmap extends reduxComponent {
  constructor(props) {
    super(props);
    this.state = {
      start_year: 'https://medium.com/pickle-fork',
      errors:[],
      buttonClass: 'button is-primary is-rounded'
    };
  }

  yearUpdated(name, e){
    console.log(name, e.target.value);
    const { store } = this.context;
    store.dispatch(setYear(name, e.target.value))
  }

  render() {
    const { store } = this.context;
    var state = store.getState();

    console.log('state', state);
    return (
        <div id="year_selector">
          <input type="range" min="1940" max="2018" onChange={this.yearUpdated.bind(this,'start_year')} />
          <input type="range" min="1940" max="2017" onChange={this.yearUpdated.bind(this,'end_year')} />          
        </div>
    );
  }
}

export default Usmap;