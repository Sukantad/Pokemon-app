import HomePage from "@/Components/HomePage";
import { Inter } from "next/font/google";
import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
const inter = Inter({ subsets: ["latin"] });

export const getStaticProps = async () => {
  const res = await axios.get(`https://pokeapi.co/api/v2/ability`);
  return {
    props: {
      pokeData: res.data,
    },
  };
};

export default function Home({ pokeData }) {
  console.log(pokeData);

  const [inputData, setInputData] = useState("limber");
  const [data, setData] = useState();

  const getData = async (inputData) => {
    const res = await axios.get(
      `https://pokeapi.co/api/v2/ability/${inputData}`
    );
    setData(res.data.pokemon);
  };

  useEffect(() => {
    inputData && getData(inputData);
  }, [inputData]);

  return (
    <>
      <HomePage data={data} setInputData={setInputData} />
    </>
  );
}
