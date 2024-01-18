import { MdSearch } from "react-icons/md"
import styles from "./search.module.css"

const Search = ({placeholder}) => {
  return (
    <div className={styles.container}>
        <MdSearch/>
        <input tyoe="text" placeholder={placeholder} className={styles.input}/> 
    </div>
  )
}

export default Search