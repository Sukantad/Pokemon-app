import axios from "axios";
import { useEffect, useLayoutEffect, useState } from "react";
import Link from "next/link.js";

const { default: Navbar } = require("../../Components/Navbar");

function HomePage({ setInputData, data, page, setPage }) {
  const [pokDetails, setPokDetails] = useState([]);
  useEffect(() => {
    var temp = [];
    data
      ?.map((ele, i) => {
        return ele?.pokemon?.url;
      })
      ?.map((url) => {
        try {
          axios.get(url).then((response) => {
            temp.push(response?.data);
            setPokDetails([...temp]);
            // return response?.data;
          });
        } catch (error) {
          console.log(error, "error");
        }
      });
  }, [data]);
  const style = {
    backgroundColor: page ? "orange" : "grey",
  };
  return (
    <>
      <Navbar setInputData={setInputData} />
      <div className="grid gap-4 grid-cols-6 m-7">
        {pokDetails?.map((ele, i) => (
          <Link href={`pokemon/${ele.id}`} key={ele.id}>
            <div
              className="p-5 border-2 border-grey-500 rounded-2xl	shadow-md  hover:border-violet-300	max-h-25	"
              key={i}
            >
              <img
                className="w-40"
                alt="Pokemon image"
                src={ele?.sprites?.front_default}
              />
              <h1 className="text-2xl	text-center">{ele?.name}</h1>
            </div>
          </Link>
        ))}
      </div>
      <div className="flex w-48 m-auto pb-5 justify-around	">
        <button
          className="rounded-full 	px-5"
          disabled={page === 0}
          onClick={() => setPage(page - 10)}
          style={style}
        >
          PREV
        </button>
        <button
          className="rounded-full bg-orange-400	px-5"
          onClick={() => setPage(page + 10)}
        >
          NEXT
        </button>
      </div>
    </>
  );
}

export default HomePage;
