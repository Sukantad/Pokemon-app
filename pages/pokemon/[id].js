import Card from "@/Components/Card";
import axios from "axios";


export async function getServerSideProps(context) {
  try {
    var id = context.query.id;
    const data = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    return {
      props: {
        pokemon: data.data,
      },
    };
  } catch (error) {
    console.log("error")
    console.log(error,"error while view the page");

  }
}

function id({ pokemon }) {
  return (
  <>
  <Card pokemon={pokemon}/>
  </>
  );
}

export default id;
