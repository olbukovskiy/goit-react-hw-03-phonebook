import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactList from 'components/ContactList';
import AddContact from 'components/AddContact';
import Filter from 'components/Filter';
import css from './App.module.css';

export class App extends Component {
  state = {
    contacts: [
      { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
      { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
      { id: nanoid(), name: 'Eden Clements', number: '645-17-79' },
      { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addNewContact = (name, number) => {
    if (this.state.contacts.find(contact => contact.name === name)) {
      return alert(`${name} is already in contacts.`);
    }

    const newContact = { id: nanoid(), name: name, number: number };
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  deleteContact = id => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(contact => contact.id !== id),
      };
    });
  };

  filterContact = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  filteredContacts = () =>
    this.state.contacts.filter(contact => {
      return contact.name
        .toLowerCase()
        .includes(this.state.filter.toLowerCase());
    });

  render() {
    return (
      <div>
        <p className={css.sectionHeading}>Phonebook</p>
        <AddContact onSubmit={this.addNewContact} />
        <p className={css.sectionHeading}>Contacts</p>
        <Filter onChange={this.filterContact} />
        <ContactList
          contacts={this.filteredContacts()}
          onChange={this.deleteContact}
        />
      </div>
    );
  }
}
