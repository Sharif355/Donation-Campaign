import Chart from "react-google-charts";

const ChartPie = () => {
  const data = [
    ["Task", "Hours per Day"],
    ["YourDonation", 4],
    ["TotalDonation", 12],
  ];
  return (
    <div className="flex justify-center border border-red-100">
      <Chart
        width={"1000px"}
        height={"1000px"}
        chartType="PieChart"
        loader={<div>Loading Chart</div>}
        data={data}
        options={{
          is3D: true,
        }}
        rootProps={{ "data-testid": "2" }}
      ></Chart>
    </div>
  );
};

export default ChartPie;
