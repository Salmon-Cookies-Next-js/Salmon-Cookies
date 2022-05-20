import Link from 'next/link'
import styles from '../../styles/Home.module.css'
import * as React from 'react'

export default function StoreData(props) {
  React.useEffect(() =>{
        let ul = document.getElementsByTagName('ul')[0];
        let li = ul.getElementsByTagName('li');
        console.log(li);
})
return (
  <ul>
      <li>item1</li>
      <li>item2</li>
      <li>item3</li>
  </ul>
)
}

// React.useEffect(() =>{
//   let cookieTableRemove = document.getElementsByTagName('tfoot')[0];
//   let cookieTableRow = document.getElementById('newTotal');
//   console.log(cookieTableRemove);
//   cookieTableRemove.removeChild(cookieTableRow);
//   })