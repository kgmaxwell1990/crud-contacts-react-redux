import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return (
            <div>
                <h2>{this.props.contact.fname} {this.props.contact.sname}</h2>
            </div>
        );
    }
}
export default Contact;