import Link from "next/link";
import { useRouter } from "next/router";
import { useRef } from "react";

function Navbar({ setInputData }) {
  const router = useRouter();
  const ref = useRef(null);
  const handleEnter = (e) => {
    if (e.key == "Enter") {
      router.push(`/pokemon/${ref.current.value} `);
      //setInputData(ref.current.value);
      ref.current.value = "";
    }
  };
  return (
    <div className="bg-gray-600 px-3 py-2 flex justify-around">
      <h5 className="text-white py-2 font-medium w-1/2  sm:text-base lg:text-2xl xl:text-2xl">
        {" "}
        <Link href={"/"}> Pokemon </Link>
      </h5>

      <input
        className="px-1 sm:px-0  md:px-10 lg:px-10 rounded-md"
        type="text"
        ref={ref}
        onKeyPress={handleEnter}
        placeholder="Search your pokemon"
      />
    </div>
  );
}

export default Navbar;
