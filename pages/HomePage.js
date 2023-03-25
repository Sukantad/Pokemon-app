const { default: Navbar } = require("../Components/Navbar");

function HomePage({ data }) {
  console.log(data, "d");
  return (
    <>
      <Navbar />
      {data?.map((ele) => (
        <div className="mx-9">
          <h1>{ele.name}</h1>
        </div>
      ))}
    </>
  );
}

export default HomePage;
