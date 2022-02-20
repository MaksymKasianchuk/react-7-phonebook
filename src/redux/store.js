import { configureStore } from '@reduxjs/toolkit';
// import logger from 'redux-logger';
import { phonebookReducer } from './phonebook'

// const middleware = [
//     logger,
// ];

const store = configureStore({
    reducer: {
        phonebook: phonebookReducer,
    },
    devTools: process.env.NODE_ENV === 'development',
});

// eslint-disable-next-line import/no-anonymous-default-export
export default store;