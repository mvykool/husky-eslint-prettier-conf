import React, { createContext, useContext, useState } from "react";

const Context = createContext<any>(({ showMenu: false, setShowMenu: () => {} }));

export const StateContext = ({ children }: { children: React.ReactNode }) => {

    const [showMenu, setShowMenu] = useState(false);

    return (
        <div>
            <Context.Provider value={{ showMenu, setShowMenu }}>
                {children}
            </Context.Provider>
        </div>
    );
};
//function to export context

export const useStateContext = () => useContext(Context);