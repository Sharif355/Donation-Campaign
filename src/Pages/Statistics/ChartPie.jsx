import { useEffect, useState } from "react";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";

const ChartPie = () => {
  const [chartDonation, setChartDonation] = useState([]);

  useEffect(() => {
    const donations = JSON.parse(localStorage.getItem("Donations"));
    if (donations) {
      setChartDonation(donations);
    }
  }, []);
  const totalDonation = 12;
  const yourDonation = totalDonation / chartDonation.length;

  return (
    <div>
      <h2>length: {yourDonation}</h2>
      <PieChart width={400} height={400}>
        <Pie
          cx="totalDonation"
          cy="yourDonation"
          data={yourDonation}
          labelLine={false}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
          {/* {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))} */}
        </Pie>
      </PieChart>
    </div>
  );
};

export default ChartPie;
