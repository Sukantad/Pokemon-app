import HomePage from "@/pages/HomePage";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
export const getStaticProps = async () => {
  const res = await fetch(
    "https://pokeapi.co/api/v2/ability"
  );
  const data = await res.json();
  return {
    props: {
      data:data.results,
    },
  };
};
export default function Home({data}) {
  return (
    <>
      <HomePage data={data}/>
    </>
  );
}
