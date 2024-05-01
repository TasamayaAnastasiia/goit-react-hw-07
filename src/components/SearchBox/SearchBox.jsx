import style from '../SearchBox/SearchBox.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/filtersSlice';
import { selectNameFilter } from '../../redux/constant.js';
import cl from './SearchBox.module.css';

const SearchBox = () => {
    const dispatch = useDispatch();
    const value = useSelector(selectNameFilter);

    const handleChange = (e) => {
        dispatch(changeFilter(e.target.value));
    }
    return (
        <div className={style.boxForSeacrh}>
            <input onChange={handleChange} className={ cl.myInput } type="text" name="search" value={value} placeholder="Search by name..."/>
        </div>
    );
}
export default SearchBox;