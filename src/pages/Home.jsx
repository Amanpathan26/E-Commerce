/* eslint-disable react/prop-types */
import Product from '../components/Product'

function Home({ items, setCart, cart, addToCart}) {

  return (
    <>
      <Product items={ items } setCart={ setCart } cart={cart} addToCart={addToCart}/>
    </>
  )
}

export default Home