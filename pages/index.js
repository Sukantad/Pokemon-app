import { Inter } from "next/font/google";
import axios from "axios";
import { useEffect, useState } from "react";
import HomePage from "./pokemon";

export const getStaticProps = async () => {
  const res = await axios.get(`https://pokeapi.co/api/v2/pokemon`);
  return {
    props: {
      pokeData: res?.data?.results,
    },
  };
};

export default function Home({ pokeData }) {
  const [loader, setLoader] = useState(false);
  const [data, setData] = useState(pokeData);
  const [page, setPage] = useState(0);
  // pagination
  const Pagination = async (page) => {
    const value = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/?offset=${page}&limit=20`
    );
    setData(value?.data?.results);
  };
  useEffect(() => {
    setLoader(true);
    Pagination(page);
    setLoader(false);
  }, [page]);

  return (
    <>
      <HomePage data={data} page={page} setPage={setPage} setloader={setLoader} loader={loader} />
    </>
  );
}
