import React, { useState } from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import HomePage from '../../pages/Home';
import HeaderSection from '../../pages/Header/Header.page';
import DataProvider from '../../states/provider';
import Button from '../Button';
import useFetchData from '../../states/useFetchData';
import VideoPage from '../../pages/Video/Video.page';

const lightTheme = {
    bg: '#fff',
    text: '#121212',
};

const darkTheme = {
    bg: '#121212',
    text: '#fff',
};

const GlobalStyles = createGlobalStyle`body{
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.bg};
  transition: 0.5s;
}`;

function App() {
    const [mode, setMode] = useState('light');
    const [videoDetails, setVideoDetails] = useState();
    const { setSearch, response } = useFetchData();
    return (
        <DataProvider response={response}>
            <ThemeProvider theme={mode === 'light' ? lightTheme : darkTheme}>
                <GlobalStyles />
                <Button
                    id="change-theme"
                    size="10px"
                    onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
                >
                    Change Theme
                </Button>
                <div id="home-section">
                    <HeaderSection
                        globalSetSearch={setSearch}
                        videoDetails={setVideoDetails}
                    />
                    {videoDetails ? (
                        <VideoPage video={videoDetails} selectVideo={setVideoDetails} />
                    ) : (
                        <HomePage selectVideo={setVideoDetails} />
                    )}
                </div>
            </ThemeProvider>
        </DataProvider>
    );
}

export default App;
