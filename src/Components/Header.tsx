import React from "react";
import { useLocation } from "react-router-dom";

import DateRanger from "./DateRanger";
import Meses from "./Meses";

const Header: React.FC = () => {
  const [title, setTitle] = React.useState("Resumo");
  const location = useLocation();
  React.useEffect(() => {
    if (location.pathname === "/") {
      setTitle("Resumo");
      document.title = "Fintech - Resumo de Vendas";
    } else if (location.pathname === "/vendas") {
      setTitle("Vendas");
      document.title = "Fintech - Vendas";
    } else if (location.pathname.startsWith("/vendas/")) {
      setTitle("Detalhes da Venda");
      document.title = "Detalhes da Venda - Controle de Vendas";
    } else if (location.pathname === "/webhooks") {
      setTitle("Webhooks");
      document.title = "Fintech - Webhooks";
    } else if (location.pathname === "/configuracoes") {
      setTitle("Configurações");
      document.title = "Fintech - Configurações";
    } else if (location.pathname === "/contato") {
      setTitle("Contato");
      document.title = "Fintech - Contato";
    } else if (location.pathname === "/sair") {
      setTitle("Sair");
    }
  }, [location]);

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
