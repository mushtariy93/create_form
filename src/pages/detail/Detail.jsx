import axios from "../../api";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`/products/${id}`)
      .then((res) => setData(res.data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return (
      <div className="text-center py-24">
        <p>Yuklanmoqda...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-24">
        <p>{error?.message}</p>
      </div>
    );
  }

  return (
    <div className="container py-5 grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="flex flex-col items-center">
        <div className="mb-4">
          <img
            src={data?.images[index]}
            alt="Asosiy mahsulot rasm"
            className="w-full max-w-md object-cover bg-[#F7F8FA] rounded"
          />
        </div>
        <div className="flex gap-2 flex-wrap justify-center">
          {data?.images?.map((url, inx) => (
            <img
              key={inx}
              src={url}
              alt={`Rasm ${inx + 1}`}
              onClick={() => setIndex(inx)}
              className={`w-20 h-20 object-cover rounded cursor-pointer ${
                index === inx ? "border-2 border-green-500" : ""
              }`}
            />
          ))}
        </div>
      </div>

      {/* Mahsulot ma'lumotlari */}
      <div>
        <h2 className="text-3xl font-bold mb-4">{data?.title}</h2>{" "}
        <p className="text-xl font-semibold text-green-600">${data?.price}</p>
        <div className=""> 

         <p className="mb-6 text-right">{data?.description}</p></div>
      
        <button className="mt-6 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">
          Savatchaga qo‘shish
        </button>
      </div>
    </div>
  );
};

export default Detail;
