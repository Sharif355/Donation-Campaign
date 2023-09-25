import { useLoaderData } from "react-router-dom";
import HomeCards from "./HomeCards";
import Banner from "../../Components/Header/Banner/Banner";

const Home = () => {
  const data = useLoaderData();

  return (
    <div>
      <div
        className="hero h-[50vh]  "
        style={{
          backgroundImage: "url(https://i.ibb.co/JjVdF42/Rectangle-4281.png)",
        }}
      >
        <div className="hero-overlay bg-opacity-90 bg-slate-100"></div>
        <div className="hero-content  ">
          <div className="text-black ">
            <Banner></Banner>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 my-10 container mx-auto">
        {data?.map((data) => (
          <HomeCards key={data.id} data={data}></HomeCards>
        ))}
      </div>
    </div>
  );
};

export default Home;
