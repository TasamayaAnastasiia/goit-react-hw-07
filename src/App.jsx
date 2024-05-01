import { useEffect } from 'react';
import './App.css';
import SearchBox from './components/SearchBox/SearchBox.jsx';
import ContactForm from './components/ContactForm/ContactForm.jsx';
import ContactList from './components/ContactList/ContactList.jsx';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts } from './redux/contactsOps.js';
import { selectError, selectLoading } from './redux/constant.js';
import { Audio } from 'react-loader-spinner';

function App() {
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  
  return (
    <div className='container'>
        <h1>Phonebook</h1>
        <ContactForm/>
        <SearchBox/>
        {!loading && !error ? <ContactList/> : <div className='audio'><Audio height="50" width="30" radius="3" color="#1f7319" ariaLabel="three-dots-loading" wrapperStyle wrapperClass /></div>}
    </div>
  );
}

export default App;