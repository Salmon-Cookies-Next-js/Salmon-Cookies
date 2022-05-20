import React from 'react';

//Can useEffect help data state rendering/updating for form?
export default function Sales() {
const storesArray = [];
let hours = ['6 a.m', '7 a.m', '8 a.m', '9 a.m.','10 a.m','11 a.m','12 p.m','1 p.m','2 p.m','3 p.m','4 p.m','5 p.m','6 p.m','7 p.m','Daily location Total'];
const time = hours.map((data) =>{
  return(
    <>          
      <th></th>
      <th>{data}</th>
    </>
  )
}
)

function CreateStore(storeName, minCustomer, maxCustomer, avgCookieSale) {
  this.storeName = storeName;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.avgCookieSale = avgCookieSale;
  this.cookiesSoldEachHourArray = [];
  this.dailyTotal = 0;

  storesArray.push(this);
};



function getRandomCustomers(store){
  return  (Math.floor(Math.random() * (store.maxCustomer - store.minCustomer + 1) + store.minCustomer))
}

function getCookieSalesPerHour(store){
    for (let i = 0; i < hours.length; i++) {
      let customersThisHour = store.getRandomCustomers();  
      let totalCookiesSoldThisHour = Math.ceil(customersThisHour * store.avg);
      this.cookiesSoldEachHourArray.push(totalCookiesSoldThisHour);
}

function renderStoreData(store){
  
  let renderedArray = [];
  renderedArray.push(store.storeName);
  for(let i = 0; i < hours.length -1; i++){
    let totalCookiesThisHour = getCookieSalesPerHour(store)
    store.dailyTotal += totalCookiesThisHour;
    renderedArray.push(totalCookiesThisHour)
  }
  renderedArray.push(store.dailyTotal);
  return renderedArray;
}

const seattle = new CreateStore('Seattle', 23, 65, 6.3);
const tokyo = new CreateStore('Tokyo', 3, 24, 1.2);
const dubai = new CreateStore('Dubai', 11, 38, 2.3);
const paris = new CreateStore('Paris', 20, 38, 2.3);
const lima = new CreateStore('Lima', 2, 16, 4.6);


  return(
    <>
    <div>
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
        
        <button  type="submit">Add a Store</button>
      </form>
    </div>
    <table>
    <thead>
      <tr>
      {time}
      </tr>
    </thead>
    
    <tbody>
    <tr>
      {
        renderStoreData(seattle).map((data) => (
          <>
          <td >{data}</td>
          </>
        ))
      }
    </tr>
    <tr>
        {
          renderStoreData(lima).map((data) => (
            <>
            <td >{data}</td>
            </>
          ))
        }
    </tr>
    <tr>
        {
          renderStoreData(paris).map((data) => (
            <>
            <td >{data}</td>
            </>
          ))
        }
    </tr>
    <tr>
        {
          renderStoreData(dubai).map((data) => (
            <>
            <td >{data}</td>
            </>
          ))
        }
    </tr>
    <tr>
        {
          renderStoreData(tokyo).map((data) => (
            <>
            <td >{data}</td>
            </>
          ))
        }
    </tr>
    </tbody>
    </table>
    </>
  )
} 
