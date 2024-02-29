import css from '../Contact/Contact.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../store/operations';

import { selectVisibleContacts } from '../../store/selectors';

const Contact = () => {
  const dispatch = useDispatch();
  const filterName = useSelector(selectVisibleContacts);

  return (
    <ul className={css.list}>
      {filterName.map((contact, createAt) => (
        <li key={createAt} className={css.contact}>
          {contact.name} <br /> {contact.number}{' '}
          <button
            type="button"
            className={css.button_delete}
            onClick={() => dispatch(deleteContact(contact.id))}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  )
};
export default Contact;
