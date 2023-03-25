
function Navbar() {
  return (
    <div className="p-3 bg-gray-600 flex justify-around">
      <h5 className="text-white py-2 font-medium w-1/2"> Pokemon</h5>
      <input
        className="px-12 py-2 rounded-md"
        type="text"
        placeholder="Search your pokemon"
      />
    </div>
  );
}

export default Navbar;
