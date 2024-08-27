/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"

function Basket({ cart, setCart }) {

   const removeHandler = id =>{
    let removedItem = cart.filter( item => item.id != id);
    setCart(removedItem);
   }
 
  return (
         <div className="flex flex-col gap-4 items-center justify-evenly">
         {
            cart.map( (item, i) => {
            return (
            <div key={i} className="bg-white w-[80%] mx-auto  mt-3  border border-black rounded-[6px] flex justify-start items-center flex-wrap sm:flex-nowrap text-center py-5">
                <div className='min-w-[250px] max-w-[400px]'>
                    <img className='' src={ item.imgSrc }/>
                </div>
                <div>
                    <h1 className="font-bold text-xl">{  item.title }</h1>
                    <p className='my-4 text-left ml-2'>{ item.discription }</p>
                    <h2 className="font-bold text-lg mb-4">₹ { item.price }</h2>
                    <div>
                        <button className="bg-red-500 rounded px-4 py-1.5 border border-black text-bolder text-blue mr-2" onClick={ ()=>{ removeHandler(item.id) } }>Remove from cart</button>
                    </div>
                </div>
            </div>
               
        )}
       )} 

        { (cart.length != 0) &&
         (<div className="py-10">
            <button className="bg-blue-500 rounded px-4 py-1.5 border border-black text-bolder text-blue mr-2">Checkout</button>
            <button className="bg-red-500 rounded px-4 py-1.5 border border-black text-bolder text-blue mr-2" onClick={ ()=>{ setCart([]) } }>Clear all</button>
         </div>)
        }

        { (cart.length == 0) &&
         (<div className="h-60 flex justify-center items-center flex-col">
           <h1 className=" text-2xl py-10 ">Your cart is Empty....</h1>
           <Link to={"/"} className="bg-yellow-300 rounded px-4 py-1.5 border border-black text-bolder text-blue mr-2">Go to Home page</Link>
         </div>)
        }

       </div>
  )
}

export default Basket