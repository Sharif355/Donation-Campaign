import { useEffect, useState } from "react";
import Chart from "react-google-charts";

const ChartPie = () => {
  const [donation, setDonation] = useState([]);

  useEffect(() => {
    const donations = JSON.parse(localStorage.getItem("Donations"));

    if (donations) {
      setDonation(donations);
    }
  }, []);

  const totalDonation = 12 - donation.length;
  const yourDonation = donation.length;

  return (
    <div className="flex justify-center font-inter font-semibold ">
      <Chart
        width={"100%"}
        height={"500px"}
        chartType="PieChart"
        loader={<div>Loading Chart</div>}
        data={[
          ["Label", "Value"],
          ["Total Donation", totalDonation],
          ["Your Donation", yourDonation],
        ]}
        options={{
          is3D: true,
          colors: ["#FF444A", "#00C49F"],
        }}
        rootProps={{ "data-testid": "2" }}
      ></Chart>
    </div>
  );
};

export default ChartPie;
