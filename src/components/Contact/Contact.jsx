import style from './Contact.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsOps';
import cl from './Contact.module.css';

const Contact = ({list}) => {
    const dispatch = useDispatch();

    const handleDelete = (id) => {
        dispatch(deleteContact(id));
    }

    return (
        <div className={style.contact}>
            <div className={style.boxContact}>
                <div className={style.boxName}>
                    <svg viewBox="0 0 32 32" width="20" height="20">
                        <path d="M16 16c3.3 0 6-2.7 6-6s-2.7-6-6-6-6 2.7-6 6 2.7 6 6 6zM16 19c-3.975 0-12 2.025-12 6v3h24v-3c0-3.975-8.025-6-12-6z"></path>
                    </svg>
                    <p>{list.name}</p>
                </div>

                <div className={style.boxNumber}>
                    <svg viewBox="0 0 32 32" width="20" height="20">
                    <path d="M13.216 8.064c-0.382-4.394-4.966-6.55-5.16-6.638-0.121-0.058-0.264-0.093-0.414-0.093-0.059 0-0.117 0.005-0.174 0.015l0.006-0.001c-5.292 0.878-6.088 3.958-6.12 4.086-0.018 0.071-0.028 0.151-0.028 0.235 0 0.109 0.018 0.214 0.050 0.312l-0.002-0.007c6.312 19.584 19.43 23.214 23.742 24.408 0.332 0.092 0.606 0.166 0.814 0.234 0.092 0.031 0.198 0.049 0.307 0.049 0.15 0 0.293-0.034 0.421-0.094l-0.006 0.003c0.132-0.060 3.248-1.528 4.010-6.316 0.008-0.048 0.013-0.103 0.013-0.159 0-0.165-0.040-0.321-0.111-0.458l0.003 0.006c-0.068-0.132-1.698-3.234-6.218-4.33-0.073-0.019-0.156-0.030-0.242-0.030-0.246 0-0.471 0.091-0.643 0.241l0.001-0.001c-1.426 1.218-3.396 2.516-4.246 2.65-5.698-2.786-8.88-8.132-9-9.146-0.070-0.57 1.236-2.572 2.738-4.2 0.164-0.177 0.264-0.415 0.264-0.676 0-0.032-0.001-0.063-0.004-0.094l0 0.004z">
                    </path>
                    </svg>
                    <p>{list.number}</p>
                </div>
            </div>

            <button className={ cl.myButton } type="button" onClick={() => handleDelete(list.id)}>Delete</button>

        </div>
    );
}
export default Contact;