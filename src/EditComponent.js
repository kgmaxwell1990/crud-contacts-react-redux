import React, { Component } from 'react';
import { connect } from 'react-redux';

class EditComponent extends Component {
handleEdit = (e) => {
  e.preventDefault();
  const newFname = this.getFname.value;
  const newSname = this.getSname.value;
  const data = {
    newFname,
    newSname
  }
  this.props.dispatch({ type: 'UPDATE', id: this.props.contact.id, data: data })
}
render() {
return (
<div key={this.props.contact.id} className="contact">
  <form className="form" onSubmit={this.handleEdit}>
    <input required type="text" ref={(input) => this.getFname = input}
    defaultValue={this.props.contact.fname} placeholder="Enter First Name" /><br /><br />
    <textarea required rows="5" ref={(input) => this.getSname = input}
    defaultValue={this.props.contact.sname} cols="28" placeholder="Enter Second Name" /><br /><br />
    <button>Update</button>
  </form>
</div>
);
}
}
export default connect()(EditComponent);