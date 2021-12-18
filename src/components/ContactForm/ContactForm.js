import { useState } from 'react';
import s from './ContactForm.module.css';
import Icon from '../Icon/Icon';
import PropTypes from 'prop-types';

export default function ContactForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = event => {
    if (event.target.name === 'name') setName(event.target.value);
    if (event.target.name === 'number') setNumber(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit({ name, number });

    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className={s.inputWrapper}>
        <input
          type="text"
          id="nameInputId"
          className={s.input}
          value={name}
          onChange={handleChange}
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <label className={s.label} htmlFor="nameInputId">
          Name
        </label>
      </div>
      <div className={s.inputWrapper}>
        <input
          type="tel"
          id="numberInputId"
          className={s.input}
          value={number}
          onChange={handleChange}
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <label className={s.label} htmlFor="numberInputId">
          Number
        </label>
      </div>
      <button className={s.button} type="submit">
        Add contact
        <Icon
          iconName="iconUserPlus"
          width="18"
          height="18"
          className={s.iconUserPlus}
        />
      </button>
    </form>
  );
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
