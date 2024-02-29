import { nanoid } from 'nanoid';
import css from 'components/LoginForm/LoginForm.module.css';
import { useDispatch } from "react-redux"
import { login } from 'store/operations';


const LoginForm = () => {


    const dispatch = useDispatch();

    const emailId = nanoid();
    const passwordId = nanoid();
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;

        const user = {
            email: form.elements.email.value,
            password: form.elements.password.value,
        };

        dispatch(login(user));

        form.reset();
    };
    return (

        <div>
            <div className="form">
                <form className={css.decor}
                    onSubmit={handleSubmit}
                >
                    <div className={css.form_left_decoration}></div>
                    <div className={css.form_right_decoration}></div>
                    <div className={css.circle}></div>
                    <div className={css.form_inner}>
                        <label htmlFor={emailId} className={css.label_number}>
                            <h2 className={css.form_number}>Email</h2>
                            <input
                                type="email"
                                name="email"

                                id={emailId}
                                required
                            />
                        </label>
                        <label htmlFor={passwordId} className={css.label_number}>
                            <h2 className={css.form_number}>Password</h2>
                            <input
                                type="text"
                                name="password"
                            

                                id={passwordId}
                                required
                            />
                        </label>
                        <button className={css.button_submit} type="submit">
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>


    )
}

export default LoginForm;
