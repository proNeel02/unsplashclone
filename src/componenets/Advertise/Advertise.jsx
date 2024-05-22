import React, { useEffect } from "react";
import "./Advertise.css";
const Advertise = () => {
  useEffect(() => {
    document.title = "Advertise on Unsplash";
  }, []);

  return <span>AdvertiseMent</span>;
};

export default Advertise;
