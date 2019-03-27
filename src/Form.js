import React from 'react'
import Prime from './Prime'

class Form extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            value: 10
        }
        // this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        this.setState({
            value: event.target.value
        })
       
        this.forceUpdate();
        //this.props.bob(event.target.value)
    }

    render(){
        const style = {
            form : {
                height: 300,
                width: 30,
                align: 'center'
            },
            text: {

            }
        }
        return(
            <div onKeyUp={this.handleChange.bind(this)}>
               <form >
                    <label style={style.form} >
                        Number:
                        <input type="number"  />
                    </label>
                    <div >
                        <Prime val={this.state.value} />
                    </div>
                </form>
            </div>
        )
    }
}

export default Form
