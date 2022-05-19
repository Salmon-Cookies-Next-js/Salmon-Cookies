import Link from 'next/link'
import styles from '../../styles/Home.module.css'

export default function StoreData(props) {
  return(
    <div className={styles.container}>
    <h1 className={styles.title}>Store Cookie Sale Information</h1>
    <ul>
          <li>
            <Link href="/stores/seattle"><a>Seattle</a></Link>
          </li>
          <li>
            <Link href="/stores/lima"><a>Lima</a></Link>
          </li>
          <li>
            <Link href="/stores/paris"><a>Paris</a></Link>
          </li>
        </ul>
    </div>
  ) 
}