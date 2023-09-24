const Banner = () => {
  return (
    <div className="flex flex-col items-center justify-center my-40 ">
      <h1 className="text-5xl font-bold">I Grow By Helping People In Need</h1>
      <div className="flex items-center mt-5 relative ">
        <input
          type="text"
          placeholder="Search here..."
          className="input input-bordered w-[450px] max-w-lg  "
        />
        <button className="btn btn-error normal-case text-white absolute -right-7  rounded-r-lg">
          Search
        </button>
      </div>
    </div>
  );
};

export default Banner;
