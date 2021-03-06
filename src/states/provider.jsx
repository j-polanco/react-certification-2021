import React, { createContext, useContext } from 'react';

const initState = {
    data: [],
    history: [],
};

const DataContext = createContext({
    data: [],
    history: [],
});

function useData() {
    const context = useContext(DataContext);
    if (!context) {
        throw new Error(`Can't use "useData" without an DataProvider!`);
    }
    return context;
}

function DataProvider({ response, children }) {
    initState.data = response;
    const [data] = [initState];

    return <DataContext.Provider value={{ data }}>{children}</DataContext.Provider>;
}

export { useData };

export default DataProvider;
