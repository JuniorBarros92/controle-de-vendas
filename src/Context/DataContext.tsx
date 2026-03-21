import React from "react";
import useFetch from "../Hooks/useFetch";

type IdataContext = {
    data: Ivenda[] | null;
    loading: boolean;
    error: string | null;
}

type Ivenda = {
    id: string;
    nome: string;
    preco: number;
    status: "pago" | "processando" | "falha"
    pagamento: "boleto" | "pix" | "cartao";
    data: string;
    parcelas: number | null;
}

const Datacontext = React.createContext<IdataContext | null> (null)

export const useData = () => {
    const context = React.useContext(Datacontext);
    if (!context) throw new Error ("useData precisa estar em DataContextProvider");
        return context;

}

export const DataContextProvider = ({children} : React.PropsWithChildren) => {
    const {data, loading, error} = useFetch<Ivenda[]>(
        "https://data.origamid.dev/vendas/",
    );
    return (
        <Datacontext.Provider value={{data, loading, error}}>
            {children}
        </Datacontext.Provider>
    )
}