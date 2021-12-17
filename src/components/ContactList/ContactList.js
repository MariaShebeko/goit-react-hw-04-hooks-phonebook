import PropTypes from 'prop-types';
import s from './ContactList.module.css';
import Icon from '../Icon/Icon';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className={s.list}>
      <p className={s.total}>Total amount of contacts: {contacts.length}</p>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={s.item}>
          <p className={s.text}>
            <Icon
              iconName="iconAddressBook"
              width="18"
              height="18"
              className={s.iconAddressBook}
            />
            {name}: {number}
          </p>
          <button onClick={() => onDeleteContact(id)} className={s.button}>
            Delete
            <Icon
              iconName="iconBin"
              width="18"
              height="18"
              className={s.iconBin}
            />
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
