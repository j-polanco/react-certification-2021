import { useEffect, useState } from 'react';
import data from '../data/mockItems.json';
import CONSTANTS from './constants';

function getUrl(search, videoId) {
    console.log('useEffect', { search, videoId });

    const relatedVideosUrl = videoId ? `&relatedToVideoId=${videoId}` : '';
    const maxResults = `&maxResults=${videoId ? '8' : '40'}`;
    const url = `${CONSTANTS.SEARCH_URL_BASE}?part=snippet${maxResults}&q=${search}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}&type=video${relatedVideosUrl}`;
    return url;
}

export default function useFetchData(videoId) {
    const [response, setResponse] = useState([]);
    const [search, setSearch] = useState('wizeline');
    const url = getUrl(search, videoId);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const responseData = await fetch(url);
                const jsonResponse = await responseData.json();
                setResponse(jsonResponse);
                //setResponse(data);
            } catch (e) {
                console.error(e);
            }
        };

        fetchData();
    }, [url]);

    return { setSearch, response };
}
