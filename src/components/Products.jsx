import { useEffect, useState } from "react";
import axios from "axios";
import {useDispatch} from "react-redux"
import { addTocart } from "../featureSlices/cartSlices";

const Products = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const dispatch=useDispatch()

  const handleProducts = async () => {
    try {
      const res = await axios.get('https://dummyjson.com/products');
      setData(res.data.products);
      setFilteredData(res.data.products); 
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleProducts();
  }, []);

  const add = (product) => {
    dispatch(addTocart(product))
    console.log(  dispatch(addTocart(product)))
  
  };

  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearch(query);
    if (!query) {
    setFilteredData(data);
  } else {
   
    const filteredProducts = data.filter(product => product.title.toLowerCase().includes(query));
    setFilteredData(filteredProducts);
  }
  };

  return (
    <div className="container mx-auto">
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search for the item"
          value={search}
          onChange={handleSearch}
          className="px-2 py-1 border rounded"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredData.map((product) => (
          <div key={product.id} className="border p-4">
            <h1 className="text-lg font-bold">{product.title}</h1>
            <img src={product.thumbnail} alt={product.title} className="w-full h-auto" />
            <p className="mt-2 text-gray-700">Price: ${product.price}</p>
            <div className="container flex justify-center">
              <button
                className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => add(product)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
