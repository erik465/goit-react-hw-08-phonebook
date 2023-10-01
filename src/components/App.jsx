import { AddContact } from "./AddContact/AddContact";
import { ContactsList } from "./ContactsList/ContactsList";
import { ContactFilter } from "./ContactFilter/ContactFilter";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "redux/contacts/operations";
import { getError, getIsLoading } from "redux/contacts/selector";


export const App = () => {
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
  );
};
