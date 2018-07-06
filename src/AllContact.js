import React, { Component } from 'react';
import { connect } from 'react-redux';
import Contact from './Contact';
import EditComponent from './EditComponent';

class AllContact extends Component {
    render() {
        return(
            <div>
                <h1 className="contact_heading"> All Contacts </h1>
                {this.props.contacts.map((contact) => (
                    <div key={contact.id}>
                        {contact.editing ? <EditComponent contact={contact} key={contact.id} /> :
                            <Contact key={contact.id} contact={contact}/>}
                    </div>
                ))}
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
