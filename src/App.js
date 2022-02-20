import React, { Component } from 'react';
import { phonebookSelectors, phonebookOperations } from './redux/phonebook';
import { connect } from 'react-redux';

import PhoneBook from './components/PhoneBook';
import Filter from './components/Filter';
import PhoneBookForm from './components/PhonebookForm';

class App extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  };

  render(){
    return (
      <>
        <PhoneBookForm />
        {this.props.isLoadingTodos && <h1>Загружаем...</h1>}
        <Filter />
        <PhoneBook />
      </>
    )
  };
}
const mapStateToProps = state => ({
  isLoadingTodos: phonebookSelectors.getLoading(state),
});

const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(phonebookOperations.fetchContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
