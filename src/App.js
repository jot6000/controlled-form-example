import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      inputValue:''   //Make a key value pair in state for each input field you want to controll
    }
  }

  //Create a function for each input field to update its assosiated state
  //e is passed as an argument so that we have access to the 'event'
  textareaChange=(e)=>{
    this.setState({inputValue:e.target.value})
  }
  
  formSubmit=()=>{

    /*
      Do what we want with form data here
    */

    //Clear input fields like this(you can sperate the key value pairs with commas if you need to clear more than one)
    this.setState({inputValue:''})
  }

  render(){
    return (
      <div>
        <h1>
          Controlled form example
        </h1>
        <form onSubmit={this.formSubmit /* we  set the on submit function for the form*/}>
          <textarea 
            value={this.state.inputValue /*We set the value of the field to our state, this occurs after onChange fires so it takes the new state */} 
            onChange={(e)=>this.textareaChange(e) /*we set up an onChange event that fires off our function and updates the state before the value is updated*/}
          />
          <input type='submit'/>
        </form>
      </div>
    )
  }
}

export default App;
