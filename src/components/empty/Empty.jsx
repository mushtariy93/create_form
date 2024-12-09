import React from 'react'
import { useNavigate } from 'react-router-dom'
import cart from "../../assets/cart.jpg";


const Empty = ({title, url}) => {
  const navigate =  useNavigate()
  return (
    <div className="text-center">
      <img
        className="relative w-full h-[700px]  overflow-hidden bg-cover bg-center "
        src={cart}
        alt=""
      />
      <p>{title}</p>
      <button onClick={() => navigate("/")}>Go home</button>
    </div>
  );
}

export default Empty