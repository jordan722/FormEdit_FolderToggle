import React, {Component} from 'react';

class Folder extends Component{
  constructor(props){
    super(props);

    this.state = {
      toggle: true
    }

    this.handleToggle = this.handleToggle.bind(this)
  }

  handleToggle(event){
    event.preventDefault();
    var newToggle = !this.state.toggle;
    this.setState({
      toggle: newToggle
    })
  }



  render(){
      return(
        <div>
          <h2> Home </h2>

          {this.state.toggle && (
            <ul>
              <li> File 1 </li>
              <li> File 2 </li>
              <li> File 3 </li>
            </ul>
          )

          }
          <button onClick={this.handleToggle}> Toggle</button>
        </div>

      );
  }
}

export default Folder;
