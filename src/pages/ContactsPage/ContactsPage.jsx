import React from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { AddContact } from 'components/AddContact/AddContact';
import { ContactFilter } from 'components/ContactFilter/ContactFilter';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { getIsLoading, getError } from 'redux/contacts/selector';
import { fetchContacts } from 'redux/contacts/operations';

import { StyledPage } from './ContactsPage.styled';

const ContactsPage = () => {

  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <StyledPage>
        <AddContact />
        <h2>Contacts</h2>
        {isLoading && !error && <b>Request in progress...</b>}
        <ContactFilter />
        <ContactsList />
      </StyledPage>
  )
}

export default ContactsPage
