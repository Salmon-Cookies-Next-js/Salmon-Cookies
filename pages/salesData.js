import * as React from 'react'
// import stores from '../public/stores.json'
// import { useTable } from 'react-table'
//create a function that takes in state, once that state being passed in via user input
//is updated by the function it will be added to an object
//that object will be accessed by a mapped element on the page
//to dynamically render the store chart upon form submission

//passing in data structure that contains store data into storeArray

export default function SalesData(){
  // console.log("STORES:",stores)
  // const [cookieStore, setCookieStore] = React.useState(stores);
  // console.log("COOKIE",cookieStore)
  // // const [storeArray, setStoreArray] = React.useState([]);
  // const [eachHour, setEachHour] = React.useState();
  // const [dailyTotalState, setDailyTotalState] = React.useState();
  let hours = ['6 a.m', '7 a.m', '8 a.m', '9 a.m.','10 a.m','11 a.m','12 p.m','1 p.m','2 p.m','3 p.m','4 p.m','5 p.m','6 p.m','7 p.m','Daily Location Total'];
  React.useEffect(() => {
    const cookieTable = document.querySelector('thead');
    const cookieTableBody = document.querySelector('tbody');
    const cookieFooter = document.querySelector('tfoot');
    const cookieForm = document.getElementById('cookieForm');
    })
  

  
    //based on the storeName that is taken in add this min and max onto it
    //On function call update store totals
 
    React.useEffect(() =>{
      if(handleSubmit()){
      let cookieTableRemove = document.getElementsByTagName('tfoot')[0];
      let cookieTableRow = document.getElementById('newTotal');
      console.log(cookieTableRemove);
      cookieTableRemove.removeChild(cookieTableRow);
      }
      })

  const time = hours.map((data) =>{
      return(
        <>          
          <th></th>
          <th>{data}</th>
        </>
      )
    }
    )

      const getRandomCustomers = () =>{

    return(
      Math.floor(Math.random() * parseInt(stores.maxCustomer - stores.minCustomer + 1) + stores.minCustomer)
      )
  }
  console.log(getRandomCustomers())
    const storeData = stores.map((data) =>{
      console.log(data)
      
      return(
        <>
        <tr>
          <td>{data.name}</td>
          <td>{data.minCustomer}</td>
          <td>{data.maxCustomer}</td>
          <td>{data.avgCookieSale}</td>
        </tr>
        </>
      )
    })


  


  return (
  <><div>
      <form id="cookieForm">
        <fieldset>
          <legend>Add a Cookie Stand</legend>
          <label>Stand Name: 
            <input type="text" name="storeName"/>
            </label>
          <label>Min Cookies Sold:
            <input type="number" name="min"/>
            </label>
          <label>Max Cookies Sold:
            <input type="number" name="max"/>
            </label>
          <label>Average Number of Customers:
            <input type="number" name="customerAverage"/>
            </label>
        </fieldset>
        {/* put add function here to update the chart */}
        
        <button onClick={()=> getRandomCustomers()} type="submit">Add a Store</button>
      </form>
    </div><div id="cookieStores">
    <table>
      <thead>
       
      </thead>
     <tbody>
  
     </tbody>
   </table>
   <CookieStore />
      </div></>
)
}

