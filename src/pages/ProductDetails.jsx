/* eslint-disable react-hooks/exhaustive-deps */
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { items } from '../components/Data';
import Product from '../components/Product';

function ProductDetails() {

    const {id} = useParams();
    const [idProduct, setIdProduct] = useState({});
    const [categoryProduct, setCategoryProduct] = useState([]);

    useEffect(()=>{
        //This is to get the data of the Selected item based on ID (will Get only one Object od Data)
        const newIdProduct = items.filter( item => item.id == id);
        setIdProduct(newIdProduct[0]);
        // This is to get the data based on category of Selected item (It could be an arry of object)
        const newCategoryProduct = items.filter( item => item.category == idProduct.category);

        // This is for not show the same ID item in Related Product items list (Remove the select item from related items list)
        const realtedProduct = newCategoryProduct.filter( item=> item.id != id);
        setCategoryProduct(realtedProduct);
    },[id, idProduct]);

  return (
        <>
        <div className="bg-white w-[80%] mx-auto my-5 border rounded-[6px] flex justify-start flex-wrap sm:flex-nowrap items-center py-5">
            <div className='min-w-[250px] w-[300px] mx-auto'>
                <img className='w-full' src={ idProduct.imgSrc }/>
            </div>
            <div className='min-w-[300px] w-[60%] mx-auto'>
                <h1 className="font-bold text-xl text-center sm:text-left">{ idProduct.title }</h1>
                <p className='my-4'>{ idProduct.discription }</p>
                <h2 className="font-bold text-lg mb-4">₹ { idProduct.price }</h2>
                <div>
                    <button className="bg-green-500 rounded px-4 py-1.5 border border-black text-bolder text-blue mr-2">Buy now</button>
                    <button className="bg-yellow-500 rounded px-4 py-1.5 border border-black text-bolder text-blue">Add to cart</button>
                </div>
            </div>
        </div>

        <div>
            <h1 className='text-center text-4xl'>Related Products</h1>
            <Product items ={ categoryProduct }/>
        </div>
        
        
        </>
    
  )
}

export default ProductDetails