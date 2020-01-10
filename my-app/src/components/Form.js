import React, {Component} from 'react';
import './Form.css';

class Form extends Component{
  constructor(props){
    super(props);

    this.state = {
      editing: false,
      first: '',
      last: '',
      type_first:'',
      type_last:''

    }

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  handleNameChange(event){
    if(event.target.name === 'first'){
      this.setState({
        type_first: event.target.value
      });
    }
    else{
      this.setState({
        type_last: event.target.value
      });
    }

  }

  handleEdit(event){
    event.preventDefault();
    this.setState({
      editing:true
    })
  }

  handleSave(event){
    event.preventDefault();
    this.setState({
      first: this.state.type_first,
      last: this.state.type_last,
      editing:false
    })
  }

  handleCancel(event){
    event.preventDefault();
    this.setState({
      editing:false
    })
  }

  render(){
    if (this.state.editing){
      return(
        <div class="saveinfo">
        <form>
            <p class="names">First Name: <input name='first' type="text" value={this.state.type_first} onChange={this.handleNameChange}/></p> 
            <p class="names">Last Name: <input name='last' type="text" value={this.state.type_last} onChange={this.handleNameChange}/></p>
            <button class="save" onClick={this.handleSave}> Save </button>
            <button class="save" onClick={this.handleCancel}> Cancel </button>
          
        </form>
        </div>
      );
    }
    else{
      return(
        <div class="nameinfo">
           <p class="first">First Name: {this.state.first}</p>
           <p class="last">Last Name: {this.state.last}</p>
          <button class="edit" onClick={this.handleEdit}> Edit </button>
        </div>

      );
    }
  }
}

export default Form;
