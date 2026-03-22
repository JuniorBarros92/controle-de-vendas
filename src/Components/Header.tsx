import React from "react";

import DateRanger from "./DateRanger";
import Meses from "./Meses";

const Header: React.FC = () => {
  const [title, setTitle] = React.useState("Resumo");

  return (
    <header className="mb">
      <div className="daterange mb">
        <DateRanger />
        <h1 className="box bg-3">{title}</h1>
      </div>
      <Meses />
    </header>
  );
};

export default Header;