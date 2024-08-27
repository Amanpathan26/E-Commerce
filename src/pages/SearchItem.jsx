import { useParams } from "react-router-dom";
import { items } from "../components/Data";
import { useEffect, useState } from "react";
import Product from "../components/Product";

function SearchItem() {

  const { term } = useParams();
  const [searchItems, setSearchItems] = useState([]);

  useEffect(() => {
    const filterItem = items.filter(item => item.title.toLowerCase().includes(term.toLowerCase()));
    setSearchItems(filterItem);
    console.log()
  }, [term]);


  return (
    <>
      {
      (searchItems.length != 0) ? (<Product items={searchItems} />) : (<h1 className="font-bold text-5xl text-center translate-y-[100px]">Item not Found...</h1>)
      }

    </>
  )
}

export default SearchItem