import { Inter } from "next/font/google";
import axios from "axios";
import { useEffect, useState } from "react";
import HomePage from "./pogemon";


export const getStaticProps = async () => {
  const res = await axios.get(
    `https://pokeapi.co/api/v2/ability?offset=0&limit=10`
  );
  return {
    props: {
      pokeData: res.data,
    },
  };
};

export default function Home({ pokeData }) {
  const [inputData, setInputData] = useState("");
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const [pokData, setPokeData] = useState([]);
  // pagination
  const Pagination = async (page) => {
    const value = await axios.get(
      `https://pokeapi.co/api/v2/ability?offset=${page}&limit=10`
    );
    setPokeData(value.data);
  };
  useEffect(() => {
    Pagination(page);
  }, [page]);

  // Mount phase
  useEffect(() => {
    var temp = [];
    pokData?.results?.map((ele) => {
      try {
        axios.get(ele.url).then((response) => {
          temp.push(response?.data.pokemon);
          setData(...temp);
        });
      } catch (error) {
        console.log(error, "error");
      }
    });
  }, [pokData]);
  // get search data
  const getData = async (inputData) => {
    try {
      const res = await axios.get(
        `https://pokeapi.co/api/v2/ability/${inputData}`
      );
      setData(res.data.pokemon);
    } catch (error) {
      console.log(error, "error");
      return alert("Please type a valid Pogemon name");
    }
  };

  useEffect(() => {
    inputData && getData(inputData);
  }, [inputData]);

  return (
    <>
      <HomePage
        data={data}
        setInputData={setInputData}
        page={page}
        setPage={setPage}
      />
    </>
  );
}
