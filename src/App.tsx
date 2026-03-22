import Header from "./Components/Header";
import Slidenav from "./Components/Slidenav";
import { DataContextProvider } from "./Context/DataContext";
import Resumo from "./Pages/Resumo";
import Vendas from "./Pages/Vendas";
import "./Style.css";

function App() {
  return (
    <DataContextProvider>
    <div className="container">
      <Slidenav />
      <main>
        <Header />
        <Resumo />
        <Vendas />
      </main>
    </div>
    </DataContextProvider>
  );
}

export default App;
