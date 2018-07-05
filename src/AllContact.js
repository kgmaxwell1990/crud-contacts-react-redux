import React, { Component } from 'react';
import { connect } from 'react-redux';
import Contact from './Contact';

class AllContact extends Component {
    render() {
        return(
            <div>
                <h1> All Contacts </h1>
                {this.props.contacts.map((contact) => <Contact key={contact.id} contact={contact}/>)}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        contacts:state
    }
}

export default connect(mapStateToProps)(AllContact);
