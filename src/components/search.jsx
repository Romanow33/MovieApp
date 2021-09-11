import styles from './search.module.css'
import {FaSearch} from 'react-icons/fa'
import { useHistory } from 'react-router';
import { useEffect, useState } from 'react';
import { useQuery } from '../hooks/query';

export function Search() {
    const [searchText, setSearchText] = useState("");
    const history = useHistory();
    const query = useQuery()
    const search = query.get('search')

    useEffect(() => {
        setSearchText(search || "")
    }, [search]);


    const handleSubmit = (e) => {
        e.preventDefault()
        history.push("/?search=" + searchText)
    }

    return (
        <form className={styles.searchContainer} onSubmit={handleSubmit}>
            <div className={styles.searchBox} >
                <input type="text" 
                className={styles.searchInput} 
                value={searchText} 
                onChange={(e) => setSearchText(e.target.value)}/>

                <button type="submit" className={styles.searchButton}>

                    <FaSearch size={20}/>

                </button>
            </div>
        </form>
    )
}
