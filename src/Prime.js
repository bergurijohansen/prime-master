import React, { Component } from 'react';

class Prime extends Component {
  constructor(props)
  {
    super(props)
    this.state = {
      n: 100,
      arr: [],
      primes: 0
    }
  }

  componentDidMount(){
    this.findPrimes();
  }

  componentDidUpdate(prevProps) {
    // only update chart if the data has changed
    if (prevProps.val !== this.props.val) {
      this.setState({
        n: this.props.val
      })
      this.findPrimes()
      this.forceUpdate();
    }
  }
  findPrimes = () => {
    let placeholderArray = new Array(parseInt(this.state.n,10) + 1).fill(1);
    let printArray = [];
    placeholderArray[0] = placeholderArray[1] = 0;
    let counter = this.state.n;
    let placeholder = [];
    let numberOfPrimes = 0;
    let tmp = 0;
    let num = 0;
    while(counter > 1){
      placeholder.push(counter);
      --counter;
    }

    for (let i = 2; i <= placeholderArray.length; (i == 2 ? i++ : i+=2)) {
      tmp = i + i;
      while (tmp <= placeholderArray.length) {
        placeholderArray[tmp] = 0;
        tmp += i;
      }

      if(placeholderArray[i] == 1)
      {
        printArray[num] = placeholderArray.indexOf(1,i);
        num++;
        numberOfPrimes++;
      }

    }

    this.setState({
      arr : printArray,
      primes: numberOfPrimes
    })
  }

  Printing = () => {
    return this.state.arr.map((number) => <li>{number}</li>)
  }


  render() {
    const style = {
      headerDiv : {
        height: 50,
        width: 400,
        backgroundColor: '#AD9'
      },
      text: {
        fontSize: '20px',
        color: 'black'
      },
      list: {
        padding: '80px'
      }
    }
    return (
      <div>
        <div style={style.headerDiv}>
          <p style={style.text}>Number of primes: {this.state.primes}</p>
        </div>
        <ol style={style.list}>
         {this.Printing()}
        </ol>
      </div>
    );
  }
}

export default Prime;
