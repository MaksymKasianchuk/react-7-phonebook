import { createReducer, combineReducers  } from '@reduxjs/toolkit';
import{
    fetchContactsRequest,
    fetchContactsSuccess,
    fetchContactsError,
    addContactRequest,
    addContactSuccess,
    addContactError,
    deleteContactRequest,
    deleteContactSuccess,
    deleteContactError,
    changeFilter,
    errorHappen,
} from './phonebook-actions';
//id !== payload
const contacts = createReducer([], {
    [fetchContactsSuccess]: (_, { payload }) => payload,
    [addContactSuccess]: (state, { payload }) => [...state, payload],
    [deleteContactSuccess]: (state, { payload }) => state.filter(({ id }) => id !== payload),
});

const loading = createReducer(false, {
    [fetchContactsRequest]: () => true,
    [fetchContactsSuccess]: () => false,
    [fetchContactsError]: () => false,
    [addContactRequest]: () => true,
    [addContactSuccess]: () => false,
    [addContactError]: () => false,
    [deleteContactRequest]: () => true,
    [deleteContactSuccess]: () => false,
    [deleteContactError]: () => false,
});

const filter = createReducer('', {
    [changeFilter]: (_, { payload }) => payload,
});

const error = createReducer(null, {
    [errorHappen]: (_, { payload }) => payload,
});

export default combineReducers({
    contacts, 
    filter,
    loading,
    error,
});