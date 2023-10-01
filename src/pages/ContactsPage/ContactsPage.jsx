import React from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { AddContact } from 'components/AddContact/AddContact';
import { ContactFilter } from 'components/ContactFilter/ContactFilter';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { getIsLoading, getError } from 'redux/contacts/selector';
import { fetchContacts } from 'redux/contacts/operations';

const ContactsPage = () => {

  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
        <h1>Phonebook</h1>
        <AddContact />
        <h2>Contacts</h2>
        {isLoading && !error && <b>Request in progress...</b>}
        <ContactFilter />
        <ContactsList />
      </div>
  )
}

export default ContactsPage
