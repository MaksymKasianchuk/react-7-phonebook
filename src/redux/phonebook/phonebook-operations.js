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
    
} from './phonebook-actions';
import contactsApi from '../../services/contacts-api';

const fetchContacts = () => async dispatch => {
    dispatch(fetchContactsRequest());

    try {
        const data = await contactsApi.fetchAllContacts();
        dispatch(fetchContactsSuccess(data));
    }
    catch(error) {
        dispatch(fetchContactsError(error));
    }
};

const addContact = (name, phone) => async dispatch => {

    const contact = {
        name, 
        phone
    };

    dispatch(addContactRequest());

    try {
        const data = await contactsApi.addContact(contact);
        dispatch(addContactSuccess(data));
    }
    catch(error) {
        dispatch(addContactError(error));
    }
};

const deleteContact = (contactId) => async dispatch => {
   
    dispatch(deleteContactRequest());

    try {
        await contactsApi.deleteContact(contactId);
        dispatch(deleteContactSuccess(contactId));
    }
    catch(error) {
        dispatch(deleteContactError(error));
    }
};
// eslint-disable-next-line import/no-anonymous-default-export
export default { fetchContacts, addContact, deleteContact };