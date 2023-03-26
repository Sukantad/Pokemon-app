import axios from "axios";
import { useEffect, useLayoutEffect, useState } from "react";

const { default: Navbar } = require("../Components/Navbar");

function HomePage({ setInputData, data }) {
  const [pokDetails, setPokDetails] = useState([]);
  useEffect(() => {
    var temp = [];
    data?.map((ele, i) => {
        return ele?.pokemon?.url;
      })?.map((url) => { 
        try {
          axios.get(url).then((response) => {
          temp.push(response?.data);
          setPokDetails([...temp]);
          return response?.data;
        });
        } catch (error) {
          console.log(error,"error")
        }
        

      });
  }, [data]);

  return (
    <>
      <Navbar setInputData={setInputData} />
      <div className="grid gap-4 grid-cols-4 grid-rows-4 m-7">
        {pokDetails?.map((ele, i) => (
          <div
            className="p-5 border-2 border-grey-500 rounded-2xl	shadow-md  hover:border-violet-300	 "
            key={i}
          >
            <img className="w-72 	" src={ele?.sprites?.front_default} />
            <h1 className="text-2xl	text-center">{ele?.name}</h1>
          </div>
        ))}
      </div>
    </>
  );
}

export default HomePage;
