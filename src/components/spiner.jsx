import {FaSpinner} from 'react-icons/fa'
import styles from './spiner.module.css'

export function Spiner() {
    return (
        <div className={styles.spinner}>
            <FaSpinner className={styles.spinning} size ={60}/>
        </div>
    )
}
