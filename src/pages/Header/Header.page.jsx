import React, { useState } from 'react';
import Emoji from '../../components/Emoji';
import Button from '../../components/Button';
import { useData } from '../../states/provider';
import { ACTIONS } from '../../states/reducer';
import CONSTANTS from '../../states/constants';
import CurrentDiv, { Styled } from './Header.page.styled';
import Login from '../../components/Login/Login.component';

function HeaderSection() {
    const { data, dispatch } = useData();
    let localSearch;
    const [showLogin, setShowLogin] = useState(false);

    function dispatchEvent() {
        if (!localSearch) {
            alert('please enter a valid search term');
        } else {
            dispatch({
                type: ACTIONS.CHANGE_SEARCH_VALUE,
                payload: { searchValue: localSearch },
            });

            document.getElementById('home_link').click();
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

    function changeTheme(event) {
        event.preventDefault();
        dispatch({
            type: ACTIONS.CHANGE_SELECTED_THEME,
            payload: {
                theme:
                    data.selectedTheme === CONSTANTS.themes.darkTheme
                        ? CONSTANTS.themes.lightTheme
                        : CONSTANTS.themes.darkTheme,
            },
        });
    }

    function setSearch(value) {
        localSearch = value;
    }

    function handlerLogin() {
        if (showLogin) {
            dispatch({ type: ACTIONS.LOGOUT, payload: {} });
        }

        setShowLogin(!showLogin);
    }

    return (
        <div>
            <Button id="change-theme" size="10px" onClick={(event) => changeTheme(event)}>
                Change Theme
            </Button>
            <CurrentDiv id="home-section">
                <Button size="2em">
                    <Styled.Link to="#" onClick={handlerLogin}>
                        {data.loginUser ? `${data.loginUser} (logout 🚪)` : 'Login 🔑'}
                    </Styled.Link>
                </Button>
                <Button size="2em">
                    <Styled.Link to="/home" id="home_link">
                        <Emoji symbol="Home 🎥" />
                    </Styled.Link>
                </Button>
                {data.selectedVideo && (
                    <Button size="2em">
                        <Styled.Link to="/detailedVideo">
                            <Emoji symbol="selected video 📺" />
                        </Styled.Link>
                    </Button>
                )}
                <Button size="2em">
                    <Styled.Link to="/favorite">
                        <Emoji symbol="Favorites ✨" />
                    </Styled.Link>
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
            {showLogin ? <Login show={setShowLogin} /> : ''}
        </div>
    );
}

export default HeaderSection;
