import React from "react";
import { useData } from "../Context/DataContext";

const Resumo: React.FC = () => {
  const {data} = useData();
  console.log(data)
  return (
    <div>
      <h1>Resumo</h1>
    </div>
  );
};

export default Resumo;