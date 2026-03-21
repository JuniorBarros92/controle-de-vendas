import React from "react";
import { useData } from "../Context/DataContext";

const Header: React.FC = () => {

  const {data} = useData();
  console.log(data)
  return (
    <header>
      <h1>Header</h1>
    </header>
  );
};

export default Header;