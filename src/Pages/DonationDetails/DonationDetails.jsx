import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Donations from "../Donations/Donations";

const DonationDetails = () => {
  const [donation, setDonation] = useState({});

  const { id } = useParams();

  const loadedData = useLoaderData();

  useEffect(() => {
    const findDonationDetails = loadedData?.find((data) => data.id == id);
    if (findDonationDetails) {
      setDonation(findDonationDetails);
    }
  }, [id, loadedData]);

  return (
    <div>
      <Donations donation={donation}></Donations>
    </div>
  );
};

export default DonationDetails;
