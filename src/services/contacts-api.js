import axios from 'axios';

axios.defaults.baseURL = 'https://620f937cec8b2ee28345149a.mockapi.io/api/v1';

const fetchAllContacts = () =>{
    return axios 
    .get(
        `/contacts`,
    )
    .then( response => response.data);
};

const addContact = (contact) =>{
    return axios 
    .post('/contacts', contact)
    .then(({ data }) => data);
};

const deleteContact = (contactId) =>{
    return axios 
    .delete(`/contacts/${contactId}`)
    .then(({ data }) => data);
};


// eslint-disable-next-line import/no-anonymous-default-export
export default { fetchAllContacts, addContact, deleteContact };