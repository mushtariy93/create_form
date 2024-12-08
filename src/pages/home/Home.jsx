import React, { useEffect, useState } from 'react'
import image from "../../assets/bgimage.png"
import heroimage from "../../assets/hero.png"
import axios from '../../api';
import Products from '../../components/products/Products';

const Home = () => {
  const [data, setData] = useState()

  useEffect(() => {
      axios.get("/products").then((res) => setData(res?.data));
    }, []);

  return (
    <div>
      <div
        className="relative w-full h-[700px]  overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="container h-full flex justify-center items-center">
          <div className="  bg-[#F7F8FACC] h-[350px] w-[730px] flex flex-col justify-center items-center gap-8">
            <img src={heroimage} alt="" />
            <p className="font-normal text-[18px] text-center w-[75%]">
              All handmade with natural soy wax, Candleaf is a companion for all
              your pleasure moments
            </p>
            <button className="font-medium text-[20px] leading-6 text-center text-white py-2 px-[44px] bg-[#56B280] rounded-md">
              Discovery our collection
            </button>
          </div>
        </div>
        
      </div>
      <Products title="Products" data={data?.products}/>
    </div>
  );
}

export default Home
