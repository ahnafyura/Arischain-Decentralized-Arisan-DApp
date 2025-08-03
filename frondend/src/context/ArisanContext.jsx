import { createContext, useState } from "react";

export const ArisanContext = createContext();

export const ArisanProvider = ({ children }) => {
  const [groupData, setGroupData] = useState(null);

  return (
    <ArisanContext.Provider value={{ groupData, setGroupData }}>
      {children}
    </ArisanContext.Provider>
  );
};
