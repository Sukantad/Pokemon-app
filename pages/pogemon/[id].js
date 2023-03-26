import Navbar from "@/Components/Navbar";
import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export async function getServerSideProps(context) {
  var id = context.query.id;
  const data = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
  return {
    props: {
      pokemon: data.data,
    },
  };
}
function id({ pokemon }) {
  console.log(pokemon, "id");
  return (
    <>
      <div className="p-3 bg-gray-600 text-white">
        <Link href={"/"}>
          {" "}
          <h5 className="text-2xl text-center	"> Pokemon</h5>
        </Link>
      </div>

      <div className="flex  justify-between ">
        <div className=" mx-auto bg-white m-10  border-2 border-grey-500 rounded-2xl	shadow-md 	">
          <Image
            className="mx-auto"
            src={pokemon?.sprites?.front_default}
            width={400}
            height={300}
            alt={pokemon.name}
          />
          <h1 className="text-center capitalize text-3xl pt-2 pb-4">
            {pokemon.name}
          </h1>
        </div>
        <div className="flex flex-col gap-6 mt-8 w-1/2">
          <div className="flex items-center gap-4">
            <h2 className="bg-orange-400 px-4 py-1 rounded-xl text-lg">
              Type:
            </h2>
            {pokemon.types?.map((e) => (
              <span key={e.type.name} className="type">
                {e.type.name}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <h2 className=" bg-amber-400 px-4 py-1 rounded-xl text-lg">
              Abilities:
            </h2>
            {pokemon.abilities?.map((e) => (
              <span key={e.ability.name} className="ability">
                {e.ability.name}
              </span>
            ))}
          </div>

          <div>
            {" "}
            <span className="bg-cyan-400 px-4 py-1 rounded-xl">
              {" "}
              Weight:
            </span>{" "}
            {pokemon.weight} pounds
          </div>
          <div>
            <span className="bg-lime-400 px-4 py-1 rounded-xl"> Height:</span>{" "}
            {pokemon.height} feet
          </div>
          <div>
            {" "}
            <span className="bg-green-400 px-4 py-1 rounded-xl">
              {" "}
              Base experience:
            </span>{" "}
            {pokemon.base_experience}
          </div>
          <div>
            {" "}
            {pokemon?.stats.map((e) => {
              var text = e.stat.name
                .split(" ")
                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                .join(" ");
              return (
                <p key={e.stat.name} className="text-lg pb-4 font-semibold">
                  {text} :{" "}
                  <meter low="60" high="80" max="100" value={e.base_stat}>
                    {e.stat.name}
                  </meter>{" "}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default id;
