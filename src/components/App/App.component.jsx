import React from 'react';
import HeaderSection from '../../pages/Header/Header.page';
import DataProvider from '../../states/provider';
import Routes from '../Routes/Routes.component';

function App() {
    return (
        <DataProvider>
            <HeaderSection />
            <Routes />
        </DataProvider>
    );
}

export default App;
