import { useEffect, useState } from "react";

const Banner = () => {
  const [search, setSearch] = useState(null);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.text.value);
  };

  const handleSubmit = () => {
    console.log("s");
  };

  return (
    <div className="flex flex-col items-center justify-center   md:w-full ">
      <h1 className=" text-base md:text-xl lg:text-5xl font-bold font-inter ">
        I Grow By Helping People In Need
      </h1>
      <div className="flex flex-row items-center mt-5 relative ">
        <form onSubmit={handleSubmit}>
          <input
            onChange={handleSearch}
            className=" py-2 md:py-5 w-48 md:w-96  "
            type="text"
            name="text"
            id=""
          />
          <input
            className="p-2 md:p-5 border bg-red-500 text-white "
            type="submit"
            name="submit"
            value="Search"
          />
        </form>
      </div>
    </div>
  );
};

export default Banner;
