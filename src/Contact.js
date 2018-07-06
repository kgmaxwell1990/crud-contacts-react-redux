import React, { Component } from 'react';
import { connect } from 'react-redux';

class Contact extends Component {
    render() {
        return (
            <div className="contact">
                <h2 className="post_title">{this.props.contact.fname} {this.props.contact.sname}</h2>
                <div className="control-buttons">
                <button className="edit" onClick={()=>this.props.dispatch({type:'EDIT_CONTACT',id:this.props.contact.id})}>Edit</button> 
                <button className="delete" onClick={()=>this.props.dispatch({type:'DELETE_CONTACT',id:this.props.contact.id})}>Delete</button>
                </div>
            </div>
        );
    }
}

export default connect()(Contact);

