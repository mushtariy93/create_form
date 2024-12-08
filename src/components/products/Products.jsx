import React, { memo } from "react";

const Products = ({ data, title }) => {
  const productItems = data?.map((item) => (
    <div
      key={item.id}
      className="p-6 flex flex-col justify-center text-center items-center bg-white rounded-lg overflow-hidden"
    >
      <div className="w-full h-64 relative">
        <img
          className="object-cover w-full h-full rounded-lg"
          src={item.thumbnail}
          alt={item.title}
        />
      </div>
      <div className="card__body flex flex-col gap-2 mt-4">
        <p className="font-bold text-lg text-gray-800">{item.title}</p>
        <div className="flex justify-between items-center w-full">
          <p className="font-semibold text-xl text-blue-500">
            {item.price} <span className="text-black">USD</span>
          </p>
        </div>
      </div>
    </div>
  ));

  return (
    <div>
      <div className="container">
        <h2 className=" text-2xl">{title}</h2>
      </div>
      <div className="grid container gap-3 grid-cols-4">{productItems}</div>
    </div>
  );
};

export default memo(Products);
