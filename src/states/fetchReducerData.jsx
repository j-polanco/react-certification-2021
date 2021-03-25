import CONSTANTS from './constants';
import { ACTIONS } from './reducer';

function getUrl(search, videoId) {
    const relatedVideosUrl = videoId ? `&relatedToVideoId=${videoId}` : '';
    const maxResults = `&maxResults=${videoId ? '8' : '40'}`;
    const url = `${CONSTANTS.SEARCH_URL_BASE}?part=snippet${maxResults}&q=${search}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}&type=video${relatedVideosUrl}`;
    return url;
}

export default async function fetchReducerData(searchValue, videoId, dispatch) {
    const url = getUrl(searchValue, videoId);

    function setData(data) {
        dispatch({ type: ACTIONS.CHANGE_RESPONSE, payload: { data } });
    }

    function setSelectedVideo(selectedVideo) {
        dispatch({ type: ACTIONS.selectedVideo, payload: { selectedVideo } });
    }

    try {
        if (videoId) {
            setSelectedVideo(videoId);
        }
        const responseData = await fetch(url);
        const jsonResponse = await responseData.json();
        setData(jsonResponse);
    } catch (e) {
        console.error(e);
    }
}
