import { Inter } from "next/font/google";
import axios from "axios";
import { useEffect, useState } from "react";
import HomePage from "./pokemon";

export const getStaticProps = async () => {
  const res = await axios.get(`https://pokeapi.co/api/v2/pokemon`);
  return {
    props: {
      pokeData: res.data.results,
    },
  };
};

export default function Home({ pokeData }) {
  console.log(pokeData, "pokedata");
  const [inputData, setInputData] = useState("");
  const [data, setData] = useState(pokeData);
  const [page, setPage] = useState(0);
  // pagination
  const Pagination = async (page) => {
    const value = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/?offset=${page}&limit=20`
    );
    console.log(value.data.results, "pagi");
    setData(value.data.results);
  };
  useEffect(() => {
    Pagination(page);
  }, [page]);

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
