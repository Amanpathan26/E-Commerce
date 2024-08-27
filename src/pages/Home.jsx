/* eslint-disable react/prop-types */
import Product from '../components/Product'

function Home({ items, setCart, cart}) {

  return (
    <>
      <Product items={ items } setCart={ setCart } cart={cart}/>
    </>
  )
}

export default Home