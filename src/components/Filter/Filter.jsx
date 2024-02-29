import { useDispatch } from "react-redux";
import { addFilter } from "store/contactsreducer";
import css from "./Filter.module.css"
const Filter = () => {

  const dispatch = useDispatch();
  const changeFilter = event => {
    const filter = event.currentTarget.value;
    dispatch(addFilter(filter));

  };
  return (
    <div className={css.decor}>
      <div className={css.form_left_decoration}></div>
      <div className={css.form_right_decoration}></div>
      <div className={css.circle}></div>
      <div className={css.form_inner}>
        <h3 style={{ fontSize: 30 }}>Find contacts by name</h3>
        <input
          type="text"
          name="name"

          onChange={changeFilter}
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        /></div>
    </div>
  );
};

export default Filter;
