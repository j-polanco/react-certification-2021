import React, { createContext, useContext, useReducer } from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';
import CONSTANTS from './constants';
import reducer from './reducer';

const GlobalStyles = createGlobalStyle`body{
    color: ${(props) => props.theme.text};
    background-color: ${(props) => props.theme.bg};
    transition: 0.5s;
  }`;

const initState = {
    videosAvailables: [],
    selectedTheme: CONSTANTS.themes.darkTheme,
    selectedVideo: undefined,
    searchValue: 'wizeline',
    loginUser: undefined,
    favoriteVideoList:
        (localStorage.getItem(CONSTANTS.FAVORITE_KEY) &&
            new Map(JSON.parse(localStorage.getItem(CONSTANTS.FAVORITE_KEY)))) ||
        new Map(),
};

const DataContext = createContext({
    state: undefined,
    dispatch: undefined,
});

function useData() {
    const context = useContext(DataContext);
    if (!context) {
        throw new Error(`Can't use "useData" without an DataProvider!`);
    }
    return context;
}

function DataProvider({ children }) {
    const [data, dispatch] = useReducer(reducer, initState);

    return (
        <ThemeProvider theme={data.selectedTheme}>
            <GlobalStyles />
            <DataContext.Provider value={{ data, dispatch }}>
                <Router>{children}</Router>
            </DataContext.Provider>
        </ThemeProvider>
    );
}

export { useData };

export default DataProvider;
