import React, { Component } from 'react';
import Prime from './Prime'
import Form from './Form'
class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      value: 0
    }
  }

  gettingInput = (newValue) => {
    this.setState({
      value: newValue
    });
  }
  render() {
    const style = {
      outerDiv : {
        top: '300px',
        left: '300px',
        height: 900,
        width: 400,
        overflow: 'auto',
        backgroundColor: '#ACA'
      },
      innerDiv : {
        top:'0px',
        left: '150px',
        height: 100,
        width: 400,
        backgroundColor: 'green'
      },
      text: {
        fontSize: '40px',
        color: 'black'
      }
    }
    return (
      <div style={style.outerDiv}>
          <div style={style.innerDiv}>
            <p style={style.text}>
              Prime master 2000
            </p>
          <Form />
          </div>
      </div>
    );
  }
}

export default App;
