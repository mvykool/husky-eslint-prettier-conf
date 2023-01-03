import React, { createContext, useContext, useState } from "react";

const Context = createContext<any>(({ showCart: false, setShowCart: () => {} }));

export const StateContext = ({ children }: { children: React.ReactNode }) => {

    const [showCart, setShowCart] = useState(false);

    return (
        <div>
            <Context.Provider value={{ showCart, setShowCart }}>
                {children}
            </Context.Provider>
        </div>
    );
};
//function to export context

export const useStateContext = () => useContext(Context);