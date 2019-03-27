import React, { Component } from 'react';

class Prime extends Component {
  constructor(props)
  {
    super(props)
    this.state = {
      n: 100,
      arr: []
    }
  }

  toPrint = () => {
    let counter = this.state.n;
    let placeholder = [];
    while(counter > 1){
      placeholder.push(counter);
      --counter;
    }
        this.setState({
          arr : placeholder
        })
  }

  Printing = () => {
      this.state.arr.forEach(element => {
        return <li>element</li>
      });

  }


  render() {
    const style = {
      outerDiv : {
        top: '300px',
        left: '1300px',
        height: 400,
        width: 400,
        backgroundColor: 'blue'
      },
      innerDiv : {
        top:'500px',
        left: '500px',
        height: 100,
        width: 100,
        backgroundColor: 'green'
      },
      text: {
        color: 'yellow'
      }
    }
    return (
      <div style={style.outerDiv}>
          <div style={style.innerDiv}>
            <ul>
           {this.Printing}
            </ul>
          </div>
      </div>
    );
  }
}

export default App;
