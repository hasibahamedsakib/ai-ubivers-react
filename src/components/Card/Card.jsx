import { useEffect, useState } from "react";
import SingleCard from "../SingleCard/SingleCard";

const Card = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const URL = "https://openapi.programming-hero.com/api/ai/tools";
    const fetchURL = async () => {
      const res = await fetch(URL);
      const data = await res.json();
      setData(data.data.tools);
    };

    fetchURL();
  }, []);

  return (
    <div className="w-full max-w-7xl gap-6 mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  my-6">
      {data.map((singleData) => (
        <SingleCard cardData={singleData} key={singleData.id} />
      ))}
    </div>
  );
};

export default Card;
