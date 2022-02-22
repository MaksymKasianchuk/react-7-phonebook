import React, { Component } from 'react';
import { phonebookSelectors, phonebookOperations } from './redux/phonebook';
import { connect } from 'react-redux';

import PhoneBook from './components/PhoneBook';
import Filter from './components/Filter';
import PhoneBookForm from './components/PhonebookForm';
import Loader from './components/Loader';
import Section from './components/Section';

class App extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  };

  render(){
    return (
      <>
        <PhoneBookForm />
        {this.props.isLoadingTodos && <Loader/>}
        {this.props.error && <Section><h1>{this.props.error}</h1></Section>}
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
