import React, { Component } from 'react';
import ContactForm from './ContactForm';
import AllContact from './AllContact'

class App extends Component {
  render() {
    return (
      <div className="App">
        <ContactForm/>
        <AllContact/>
      </div>
    );
  }
}

export default App;
