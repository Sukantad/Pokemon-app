import axios from "axios";
import { useEffect, useState } from "react";
import Link from "next/link.js";
import Head from "next/head";

const { default: Navbar } = require("../../Components/Navbar");

function HomePage({ setInputData, data, page, setPage }) {
  console.log(data, "d");
  const [pokDetails, setPokDetails] = useState([]);
  // useEffect(() => {
  //   var temp = [];
  //   data
  //     ?.map((ele, i) => {
  //       return ele?.pokemon?.url;
  //     })
  //     ?.map((url) => {
  //       try {
  //         axios.get(url).then((response) => {
  //           temp.push(response?.data);
  //           setPokDetails([...temp]);
  //         });
  //       } catch (error) {
  //         console.log(error, "error");
  //       }
  //     });
  // }, [data]);

  const style = {
    backgroundColor: page ? "orange" : "grey",
  };

  let text = data?.name
    ?.split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
  const id = data?.url?.split("/")[data?.url?.split("/").length - 2];
  return (
    <>
      <Navbar setInputData={setInputData} />
      <Head>
        <title>Pokemon</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@1,600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div
        className="grid gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-6   m-7"
        style={{ fontFamily: "Lora" }}
      >
        {data?.length ? (
          <>
            {data?.map((ele, i) => {
              let text = ele?.name
                ?.split(" ")
                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                .join(" ");
              const ind = ele?.url?.split("/")[ele?.url?.split("/").length - 2];

              return (
                <Link href={`pokemon/${ele.name}`} key={ele.name}>
                  <div
                    className="p-5 border-2 border-grey-500 rounded-2xl	shadow-md  hover:border-violet-300	 md:h-52   lg:h-64 2xl:h-40 	"
                    key={i}
                  >
                    <img
                      className="w-40 m-auto"
                      alt="Pokemon image"
                      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${ind}.png`}
                    />
                    <h1 className="text-2xl md:text-base lg:text-2xl	text-center">
                      {text}
                    </h1>
                  </div>
                </Link>
              );
            })}
          </>
        ) : (
          <Link href={`pokemon/${data.name}`} key={data.name}>
            <div
              className="p-5 border-2 border-grey-500 rounded-2xl	shadow-md  hover:border-violet-300	 md:h-52   lg:h-64 2xl:h-40 	"
              key={data.name}
            >
              <img
                className="w-40 m-auto"
                alt="Pokemon image"
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
              />
              <h1 className="text-2xl md:text-base lg:text-2xl	text-center">
                {text}
              </h1>
            </div>
          </Link>
        )}
      </div>
   {data?.length?   <div
        className="flex w-48 m-auto pb-5 justify-around	"
        style={{ fontFamily: "Lora" }}
      >
        <button
          className="rounded-full 	px-5"
          disabled={page === 0}
          onClick={() => setPage(page - 10)}
          style={style}
        >
          PREV
        </button>
        <p> {page / 10 + 1}</p>
        <button
          className="rounded-full bg-orange-400	px-5"
          onClick={() => setPage(page + 10)}
        >
          NEXT
        </button>
      </div> :""}
    </>
  );
}

export default HomePage;
