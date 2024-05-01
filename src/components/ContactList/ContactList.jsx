import Contact from '../Contact/Contact.jsx';
import style from './ContactList.module.css';
import { selectFilteredContacts } from '../../redux/filtersSlice.js';
import { useSelector } from 'react-redux';

const ContactList = () => {
    const filtrList = useSelector(selectFilteredContacts);

    return (
       <ul className={style.listContacts}>
            {
                filtrList.length !== 0 && (
                    filtrList.map(contact => (<li key={contact.id}><Contact list={contact}/></li>
                )))
            }
       </ul>
    );
}
export default ContactList;