import { useEffect, useState } from "react";
import DonationCard from "./DonationCard";

const Donation = () => {
  const [donations, setDonations] = useState([]);
  const [noDonation, setNoDonation] = useState("");
  const [seeAll, setSeeAll] = useState(false);

  useEffect(() => {
    const donations = JSON.parse(localStorage.getItem("Donations"));
    if (donations) {
      setDonations(donations);
    } else {
      setNoDonation("No Data Found");
    }
  }, []);

  const handleDeleteAllDonation = () => {
    localStorage.clear(), setDonations([]), setNoDonation("No Data Found");
  };

  return (
    <div>
      {noDonation ? (
        <p className="text-center text-2xl">No Data Found!</p>
      ) : (
        <div>
          <div className="flex justify-center">
            <button
              onClick={handleDeleteAllDonation}
              className="btn bg-[#009444] hover:bg-green-500 normal-case text-white my-8"
            >
              Delete All Donation
            </button>
          </div>
          <div className="grid grid-cols-2 gap-5 container mx-auto ">
            {seeAll
              ? donations.map((donation) => (
                  <DonationCard
                    key={donation.id}
                    donation={donation}
                  ></DonationCard>
                ))
              : donations
                  .slice(0, 4)
                  .map((donation) => (
                    <DonationCard
                      key={donation.id}
                      donation={donation}
                    ></DonationCard>
                  ))}
          </div>
          <div className="flex justify-center">
            <button
              onClick={() => setSeeAll(!seeAll)}
              className="btn bg-[#009444] hover:bg-green-500 normal-case text-white my-8"
            >
              {seeAll ? "See Less" : "See All"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Donation;
