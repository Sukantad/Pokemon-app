import Card from "@/Components/Card";
import Navbar from "@/Components/Navbar";
import axios from "axios";

export async function getServerSideProps(context) {
  try {
    var name = context?.query?.name;
    const data = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
    return {
      props: {
        pokemon: data?.data,
      },
    };
  } catch (error) {
    return {
      props: {
        pokemon: "Data is not exists",
      },
    };
  }
}

function name({ pokemon }) {
  if (pokemon?.length) {
    return (
      <div>
        <Navbar />
        <h1 style={{ textAlign: "center", fontSize: "25px" }}>
          {" "}
          Not found your pokemon
        </h1>
      </div>
    );
  }
  return (
    <>
      <Card pokemon={pokemon} />
    </>
  );
}

export default name;
