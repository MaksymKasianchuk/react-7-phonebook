import React, { Component } from 'react';
import Section from '../Section/Section';
import styles from './PhoneBook.module.scss';
import { connect } from 'react-redux';
// import phonebookActions from '../../redux/phonebook/phonebook-actions';
import { phonebookSelectors, phonebookOperations } from '../../redux/phonebook'

class PhoneBook extends Component {
    render() {
        const { contacts } = this.props;
        return (
                <Section title="Contacts" classArr={['PhoneBookSection']}>

                    {   contacts.length > 0 ?
                            <ul className={styles.Contacts}>
                                {   
                                    contacts.map(({id, name, phone}) => (
                                        <li key={id}>
                                            <span className={styles.ContactsName}>
                                            {name} 
                                            </span>
                                            <span className={styles.ContactsNumber}>
                                            {phone}
                                            </span>
                                            <button 
                                            type="button" 
                                            onClick={() => this.props.onDeleteContact(id)}
                                            className={styles.DeleteBtn}
                                            >
                                                Delete
                                            </button>
                                        </li>
                                    ))
                                }
                            </ul>
                        :
                            <p className={styles.Empty}>Nothing here! Please, add a contact!</p>
                    }
                </Section>
        );
    }
}

const mapStateToProps = state => ({
    contacts: phonebookSelectors.getVisibleContacts(state),
});

const mapDispatchToProps = dispatch => ({
    onDeleteContact: id => dispatch(phonebookOperations.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PhoneBook); 