import React from 'react';
import Section from '../Section';
import { connect } from 'react-redux';
import { phonebookSelectors, changeFilter } from '../../redux/phonebook'
import styles from './Filter.module.scss';

const Filter = ({value, onChange}) => {
   
    return (
        <Section title="Filter" classArr={['PhoneBookSection']}>
        <input
            type="text"
            name={value}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            onChange={onChange}
            className={styles.Filter}
        />
    </Section>
    );
    
};

const mapStateToProps = state => ({
    value: phonebookSelectors.getFilter(state),
});
  
const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(changeFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);