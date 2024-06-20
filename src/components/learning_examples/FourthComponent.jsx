import { Component } from 'react';

export default class FourthComponent extends Component {
  render() {
    return (
      // Only one parent 
      <>
        <div className='FourthComponent'>Fourth Component</div>
        <div className='FourthComponent'>Fourth Component</div>
      </>
    );
  }
}
