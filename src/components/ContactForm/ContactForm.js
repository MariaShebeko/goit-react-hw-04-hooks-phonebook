import React, { Component } from 'react';
import s from './ContactForm.module.css';
import Icon from '../Icon/Icon';
import PropTypes from 'prop-types';
class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className={s.inputWrapper}>
          <input
            type="text"
            className={s.input}
            value={this.state.name}
            onChange={this.handleChange}
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <label className={s.label} htmlFor={this.nameInputId}>
            Name
          </label>
        </div>
        <div className={s.inputWrapper}>
          <input
            type="tel"
            className={s.input}
            value={this.state.number}
            onChange={this.handleChange}
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <label className={s.label} htmlFor={this.numberInputId}>
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
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
