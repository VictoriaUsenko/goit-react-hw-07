import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { selectLoading } from "../../redux/contactsSlice";
import { fetchContacts } from "../../redux/contactsOps";

import "./App.css";

import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";

export default function App() {
  const isLoading = useSelector(selectLoading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {isLoading ? <div>Loading data...</div> : <ContactList />}
    </div>
  );
}
