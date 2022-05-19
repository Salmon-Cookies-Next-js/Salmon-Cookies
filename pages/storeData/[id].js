//give you access to query parameter from the url
import { useRouter } from 'next/router'

//destructuring the { store } prop and using it within our JSX
export default function Store({ store }){
  
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
    <h1>You are visiting the {id} store</h1>
    <p>There are an average of {store.averageHourlySales} cookie sales per hour!</p>
    </>
  )
}

//Pre-renders page (calls function and sends the results as props { store } to the component)
export async function getStaticProps({ params }) {
  //Fetching json for individual store
  //Using id to show the respective store via the params argument 
  const req = await fetch(`http://localhost:3000/${params.id}.json`);
  //convert the data into json
  const data = await req.json();

  //returning an object with a props property so each prop can be accessed by the component
  return {
    props: { store: data },
  }
}

//in order to tell next which dynamic page to render/pre-render all city ids in advance
export async function getStaticPaths() {
  //can be used with an external API/database

  const req = await fetch('http://localhost:3000/stores.json');
  const data = await req.json();
  //returns every route for this dynamic url (each store has its own route)
  //Each value is mapped to an array of objects
  const paths = data.map(store => {
    return { params: { id: store } }
  })

  //returning them from the function
  return {
    paths, 
    fallback: false
  };
}