import { useState } from "react";
import Context from "./Context";

type ProviderProps = {
    children: React.ReactNode;
};

export type ProviderValues = {
    user: string,
    loading: boolean,
    onLogin: (email: string) => void,
    setUser: (email: string) => void,
}


function Provider({ children }: ProviderProps) {

    const [user, setUser] = useState("");
    const [loading, setLoading] = useState(false);
    const [toDoList, setToDoList] = useState<string[]>([]);


    const onLogin = (email: string) => {
        setUser(email);
        }

    const values = {
        user,
        setUser,
        loading,
        setLoading,
        toDoList,
        setToDoList,
        onLogin,
    }

    return(
    <Context.Provider value={values}>
        {children}
    </Context.Provider>)
}

export default Provider;