import React, {Component} from 'react';
import {connect} from 'react-redux';

class ContactForm extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        const fname = this.getFname.value;
        const sname =  this.getSname.value;
        const data = {
          id: new Date(),
          fname,
          sname
        }
        this.props.dispatch({type:'ADD_CONTACT', data});
        this.getFname.value = '';
        this.getSname.value = '';
      }
    render() {
        return(
            <div>
            <h1>Create Contact</h1>
            <form onSubmit={this.handleSubmit}>
            <input required type="text" ref={(input)=>this.getFname = input} placeholder="Enter First Name" /><br /><br />
            <input required type="text" ref={(input)=>this.getSname = input} placeholder="Enter Second Name" /><br /><br />
            <button>Save</button>
            </form>
            </div>
        );
    }
}

export default connect()(ContactForm);