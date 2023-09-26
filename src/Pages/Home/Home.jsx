import { useLoaderData } from "react-router-dom";
import HomeCards from "./HomeCards";

const Home = () => {
  const data = useLoaderData();

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 my-10 container mx-auto">
        {data?.map((data) => (
          <HomeCards key={data.id} data={data}></HomeCards>
        ))}
      </div>
    </div>
  );
};

export default Home;
