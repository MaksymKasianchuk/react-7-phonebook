import axios from 'axios';

const fetchAllContacts = () =>{
    return axios 
    .get(
        `https://620f937cec8b2ee28345149a.mockapi.io/api/v1/contacts`,
    )
    .then( response => response.data);
};

const addContact = (contact) =>{
    return axios 
    .post('https://620f937cec8b2ee28345149a.mockapi.io/api/v1/contacts', contact)
    .then(({ data }) => data);
};

const deleteContact = (contactId) =>{
    return axios 
    .delete(`https://620f937cec8b2ee28345149a.mockapi.io/api/v1/contacts/${contactId}`)
    .then(({ data }) => data);
};


// eslint-disable-next-line import/no-anonymous-default-export
export default { fetchAllContacts, addContact, deleteContact };