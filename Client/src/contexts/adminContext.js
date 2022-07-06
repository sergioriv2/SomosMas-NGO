import React, { createContext, useState } from "react";

export const AdminContext = createContext();

export const AdminProvider = ({ children }) => {
  const welcomeRes = {
    title: "",
    image: "",
    text: "",
  };

  const [welcomeData, setWelcomeData] = useState(welcomeRes);
  const [organizationData, setOrganizationData] = useState(null);
  const [newsData, setNewsData] = useState(null);

  const value = {
    welcomeData,
    setWelcomeData,

    organizationData,
    setOrganizationData,

    newsData,
    setNewsData,
  };

  return (
    <AdminContext.Provider value={value}>{children}</AdminContext.Provider>
  );
};
