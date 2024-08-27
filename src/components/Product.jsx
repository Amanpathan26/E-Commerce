/* eslint-disable react/prop-types */

import { Link } from "react-router-dom"


function Product({ items, setCart, cart }) {

  const addToCart = (id, title, imgSrc, discription, price) => {
    const obj = {
      id: id,
      title: title,
      imgSrc: imgSrc,
      discription: discription,
      price: price
    }

    setCart([...cart, obj]);
  }

  return (
    <div className="mx-auto flex justify-evenly flex-wrap">
      {
        items.map((item) => {
          return <>
            <div  key={ item.id } className=" bg-white w-[350px] min-w-[350px] my-6 border border-black text-center rounded-[6px] flex justify-between flex-col py-5">
              <Link to={`/Product/${item.id}`} key={item.id}>
                <img className='mx-auto h-[200px]' src={item.imgSrc} />
              </Link>
              <h1 className="font-bold">{item.title}</h1>
              <p className="text-left mx-auto w-[95%]">{item.discription}</p>
              <h2 className="font-bold text-lg">₹ {item.price}</h2>
              <div>

                <Link to={ '/Form' }>
                <button className="bg-green-500 rounded px-4 py-1.5 border border-black text-bolder text-blue mx-2">Buy now</button>
                </Link>
                <button className="bg-yellow-500 rounded px-4 py-1.5 border border-black text-bolder text-blue" onClick={() => { addToCart(item.id, item.title, item.imgSrc, item.discription, item.price) }}>Add to cart</button>
              </div>

            </div>
          </>
        })
      }
    </div>
  )
}

export default Product