import { createSelector } from '@reduxjs/toolkit';

const getLoading = state => state.phonebook.loading;

const getFilter = state => state.phonebook.filter;

const getAllContacts = state => state.phonebook.contacts;

const getVisibleContacts = createSelector(
    [getAllContacts, getFilter],
    (allContacts, filter) =>{
        const normalizedFilter = filter.toLowerCase();
        return allContacts.filter(({ name }) => 
            name.toLowerCase().includes(normalizedFilter)
        );
    },
);
// eslint-disable-next-line import/no-anonymous-default-export
export default {
    getLoading,
    getFilter,
    getVisibleContacts,
};