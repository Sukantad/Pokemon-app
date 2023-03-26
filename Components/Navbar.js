import Link from "next/link";
import { useRef } from "react";

function Navbar({ setInputData }) {
  const ref = useRef(null);
  const handleEnter = (e) => {  
    if (e.key == "Enter") {
      setInputData(ref.current.value);
      ref.current.value = "";
    }
  };
  return (
    <div className="p-2 bg-gray-600 flex justify-around">
     
        <h5 className="text-white py-2 font-medium w-1/2 text-2xl"> <Link href={"/"}>  Pokemon  </Link></h5> 
    
      <input
        className="px-12 py-1 rounded-md"
        type="text"
        ref={ref}
        onKeyPress={handleEnter}
        placeholder="Search your pokemon"
      />
    </div>
  );
}

export default Navbar;
