import React, { useState } from 'react';
import styled from 'styled-components';
import Emoji from '../../components/Emoji';
import Button from '../../components/Button';

const CurrentDiv = styled.div`
    width: 100%;
    height: 10%;
    min-height: 6vh;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    border-radius: 1em;
    border-style: solid 5px;
    background-color: #2183d3;
`;

function HeaderSection({ globalSetSearch, videoDetails }) {
    const [search, setSearch] = useState(undefined);

    function dispatchEvent() {
        if (!search) {
            alert('please enter a valid search term');
        } else {
            globalSetSearch(search);
            videoDetails(undefined);
        }
    }

    function eventHandler(event) {
        if (event.charCode === 13) {
            dispatchEvent('onEnter');
        }
    }

    function onSearchClick() {
        dispatchEvent('onClick');
    }

    return (
        <CurrentDiv>
            <Button size="2em">
                <Emoji symbol="☰" />
            </Button>
            <Button size="1em">
                <input
                    type="search"
                    id="site-search"
                    placeholder="Search the site..."
                    onKeyPress={eventHandler}
                    onChange={(event) => setSearch(event.target.value)}
                />
                <span
                    size="1em"
                    onClick={onSearchClick}
                    onKeyPress={onSearchClick}
                    role="button"
                    tabIndex="-1"
                >
                    <Emoji symbol="🔍" />
                </span>
            </Button>
        </CurrentDiv>
    );
}

export default HeaderSection;
