import React, { Component } from 'react';
import { phonebookSelectors, phonebookOperations } from './redux/phonebook';
import { connect } from 'react-redux';

import PhoneBook from './components/PhoneBook';
import Filter from './components/Filter';
import PhoneBookForm from './components/PhonebookForm';
import Loader from './components/Loader';
import Section from './components/Section';

const errorStyles = {
  color: 'red',
}

class App extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  };

  render(){
    return (
      <>
        <PhoneBookForm />
        {this.props.error && <Section><h1 style={errorStyles}>{this.props.error}</h1></Section>}
        {this.props.isLoadingTodos && <Loader/>}
        <Filter />
        <PhoneBook />
      </>
    )
  };
}
const mapStateToProps = state => ({
  isLoadingTodos: phonebookSelectors.getLoading(state),
  error: phonebookSelectors.getError(state),
});

const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(phonebookOperations.fetchContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
