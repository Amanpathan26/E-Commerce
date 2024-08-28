/* eslint-disable react/prop-types */
import { Link, useNavigate, useLocation } from "react-router-dom"
import { items } from "./Data";
import { useState } from "react";

function Header({ cart, setData }) {

  const navigate = useNavigate();
  const [searchedTerm, setSearchedTerm] = useState("");
  const itemsArry = document.getElementsByClassName("items");
 
// function for backgroundColor changer of filter btn
  const bgActiveness = (i) => {
    for(let x of itemsArry){
      x.style.background = null;
    }
    itemsArry[i].style.background = "#AABBCC85";
  }

//Filter purpose code
  const noFilterHandler = () =>{
    setData(items);
    for(let x of itemsArry){
      x.style.background = null;
    }
  }

  const filterCategory = (category, i) => {
    const filteredData = items.filter(item => item.category == category);
    setData(filteredData);
    bgActiveness(i)
  }


  const filterPrice = (price, i) => {
    const filteredData = items.filter(item => item.price <= price);
    setData(filteredData);
    bgActiveness(i)
  }

  const searchedTermHandler = (e) => {
    setSearchedTerm(e.target.value);
  }

  const formSubmitHandler = (e) => {
    e.preventDefault();
    navigate(`/SearchItem/${searchedTerm}`);
    setSearchedTerm('');
  }

  return (

    <header className="sticky top-0">
      <nav className="width-full bg-slate-500 flex justify-between items-center px-[5%] py-3">
        <Link to={"/"} className="text-white text-bold text-xl sm:text-4xl">E-Cart</Link>

        {(useLocation().pathname == '/') &&
        <form className="w-[60%]" onSubmit={formSubmitHandler}>
          <input className="w-full px-2 py-1 sm:px-3 sm:py-2 outline-none rounded" placeholder="Search..." value={searchedTerm} onChange={searchedTermHandler} />
        </form>
        }
        
        <Link to={"/Cart"}>

          <button type="button" className="relative inline-flex items-center p-1 sm:p-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
            </svg>

            <span className="sr-only">Notifications</span>
            <div className="absolute inline-flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900">{cart.length}</div>
          </button>

        </Link>
      </nav>

      {(useLocation().pathname == '/') &&

        (<div className="width-full bg-slate-700 flex justify-evenly items-center py-4 overflow-x-scroll">
          <div className="items" onClick={ noFilterHandler }>No Filter</div>
          <div className="items" onClick={() => { filterCategory("mobile",1) }}>Mobiles</div>
          <div className="items" onClick={() => { filterCategory("tablet",2) && noFilterHandler()}}>Tablets</div>
          <div className="items" onClick={() => { filterCategory("laptop",3) }}>Laptops</div>
          <div className="items" onClick={() => { filterPrice(10000, 4) }}>Under 10,000</div>
          <div className="items" onClick={() => { filterPrice(20000, 5) }}>Under 20,000</div>
          <div className="items" onClick={() => { filterPrice(40000, 6) }}>Under 40,000</div>
          <div className="items" onClick={() => { filterPrice(200000, 7) }}>Under 200,000</div>
        </div>)
      }
    </header>
  )
}

export default Header