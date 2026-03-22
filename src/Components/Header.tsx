import React from "react";

import DateRanger from "./DateRanger";
import Meses from "./Meses";

const Header: React.FC = () => {

  return (
   <header className="mb">
      <div className="mb">
        <DateRanger />
      </div>
      <Meses />
    </header>
  );
};

export default Header;