import React, { useState, useEffect } from 'react';
import Container from './components/Container';
import Section from './components/Section';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';
import { nanoid } from 'nanoid';

export default function App() {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('contacts')) ?? [
      { id: 'id-1', name: 'Maria Shebeko', number: '111-22-33' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
  );
  const [filter, setFilter] = useState('');

  const formSubmitHandler = ({ name, number }) => {
    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    const similarContact = contacts.find(
      contact => contact.name === newContact.name,
    );
    const similarNumber = contacts.find(
      contact => contact.number === newContact.number,
    );
    if (similarContact) {
      return alert('This name is allready exist');
    } else if (similarNumber) {
      return alert('This number is allready exist');
    }

    setContacts([newContact, ...contacts]);
  };

  const deleteContact = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
  };

  const changeFilter = event => {
    setFilter(event.target.value);
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  });

  return (
    <>
      <Container>
        <Section title={'Phonebook'}>
          <ContactForm onSubmit={formSubmitHandler} />
        </Section>
        <Section title={'Contacts'}>
          <Filter value={filter} onChange={changeFilter} />
          <ContactList
            contacts={getVisibleContacts()}
            onDeleteContact={deleteContact}
          />
        </Section>
      </Container>
    </>
  );
}
