import Head from "next/head";
import Link from "next/link";

function Card({ pokemon }) {
  return (
    <div>
      <>
        <div
          className="p-3 bg-gray-600 text-white"
          style={{ fontFamily: "Lora" }}
        >
          <Link href={"/"}>
            {" "}
            <h5 className="text-2xl text-center	"> Pokemon</h5>
          </Link>
        </div>
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
          className=" sm:block md:flex lg:flex xl:flex 2xl:flex justify-between "
          style={{ fontFamily: "Lora" }}
        >
          <div className="w-72 sm:w-80 md:w-72 lg:w-80 xl:w-96 2xl:w-auto mx-auto bg-white m-10  border-2 border-grey-500 rounded-2xl	shadow-md 	">
            <img
              className="mx-auto w-96 h-72"
              src={pokemon?.sprites?.front_default}
              alt={pokemon?.name}
            />
            <h1 className="text-center capitalize text-3xl pt-2 pb-4">
              {pokemon?.name}
            </h1>
          </div>
          <div className="flex flex-col gap-6 mt-8 md:w-1/2 lg:w-1/2 xl:w-1/2 px-2  ">
            <div className="flex items-center gap-4">
              <h2 className="bg-orange-400 px-4 py-1 rounded-xl text-lg">
                Type:
              </h2>
              {pokemon?.types?.map((e) => (
                <span key={e?.type?.name} className="type">
                  {e?.type?.name}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <h2 className=" bg-amber-400 px-4 py-1 rounded-xl text-lg">
                Abilities:
              </h2>
              {pokemon?.abilities?.map((e) => (
                <span key={e?.ability?.name} className="ability">
                  {e?.ability?.name}
                </span>
              ))}
            </div>

            <div>
              {" "}
              <span className="bg-cyan-400 px-4 py-1 rounded-xl">
                {" "}
                Weight:
              </span>{" "}
              {pokemon?.weight} pounds
            </div>
            <div>
              <span className="bg-lime-400 px-4 py-1 rounded-xl"> Height:</span>{" "}
              {pokemon?.height} feet
            </div>
            <div>
              {" "}
              <span className="bg-green-400 px-4 py-1 rounded-xl">
                {" "}
                Base experience:
              </span>{" "}
              {pokemon?.base_experience}
            </div>
            <div>
              {" "}
              {pokemon?.stats.map((e) => {
                let text = e?.stat?.name
                  .split(" ")
                  .map((word) => word?.charAt(0).toUpperCase() + word?.slice(1))
                  .join(" ");
                return (
                  <p key={e.stat?.name} className="text-lg pb-4 font-semibold">
                    {text} :{" "}
                    <meter low="60" high="80" max="100" value={e?.base_stat}>
                      {e.stat?.name}
                    </meter>{" "}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </>
    </div>
  );
}

export default Card;
