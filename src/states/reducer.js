import CONSTANTS from './constants';

const ACTIONS = {
    LOGIN: 'LOGIN',
    LOGOUT: 'LOGOUT',
    CHANGE_SELECTED_THEME: 'CHANGE_SELECTED_THEME',
    CHANGE_RESPONSE: 'CHANGE_RESPONSE',
    CHANGE_SEARCH_VALUE: 'CHANGE_SEARCH_VALUE',
    CHANGE_SELECTED_VIDEO: 'CHANGE_SELECTED_VIDEO',
    ADD_TO_FAVORITES: 'ADD_TO_FAVORITES',
    REMOVE_FROM_FAVORITES: 'REMOVE_FROM_FAVORITES',
};

function handleFavorite(isAddOperation, video) {
    const favorites = new Map(JSON.parse(localStorage.getItem(CONSTANTS.FAVORITE_KEY)));

    if (video && video.id.videoId) {
        if (isAddOperation) {
            favorites.set(video.id.videoId, video);
        } else {
            favorites.delete(video.id.videoId);
        }

        localStorage.setItem(
            CONSTANTS.FAVORITE_KEY,
            JSON.stringify(Array.from(favorites.entries()))
        );
    } else {
        console.log(
            `something happends ${
                isAddOperation ? 'adding' : 'deleting'
            } a new favorite video`,
            video
        );
    }

    return favorites;
}

function loginMockUp(userName) {
    return userName === 'Wizeline';
}

function reducer(state, action) {
    console.log(action);

    const { data, selectedVideo } = action.payload;
    switch (action.type) {
        case ACTIONS.LOGIN: {
            const userInSystem = loginMockUp(action.payload.user)
                ? action.payload.user
                : undefined;
            return { ...state, loginUser: userInSystem };
        }
        case ACTIONS.LOGOUT: {
            return { ...state, loginUser: undefined };
        }
        case ACTIONS.CHANGE_SELECTED_THEME: {
            return { ...state, selectedTheme: action.payload.theme };
        }
        case ACTIONS.CHANGE_RESPONSE: {
            return { ...state, videosAvailables: data };
        }
        case ACTIONS.CHANGE_SEARCH_VALUE: {
            return { ...state, searchValue: action.payload.searchValue };
        }
        case ACTIONS.CHANGE_SELECTED_VIDEO: {
            return { ...state, selectedVideo };
        }
        case ACTIONS.ADD_TO_FAVORITES: {
            const favoriteVideoList = handleFavorite(true, action.payload.video);
            return { ...state, favoriteVideoList };
        }
        case ACTIONS.REMOVE_FROM_FAVORITES: {
            const favoriteVideoList = handleFavorite(false, action.payload.video);
            return { ...state, favoriteVideoList };
        }
        default: {
            return state;
        }
    }
}

export { ACTIONS };
export default reducer;
