import React, { useState } from "react";
import FanCard from "../components/FanCard";

const FanProfilePage = () => {
  const [userData] = useState({
    photo: "https://randomuser.me/api/portraits/men/1.jpg",
    name: "Carlos Silva",
    level: "Top Fã",
  });

  return (
    <div className="min-h-screen bg-gray-200 flex justify-center items-center p-4">
      <FanCard photo={userData.photo} name={userData.name} level={userData.level} />
    </div>
  );
};

export default FanProfilePage;
