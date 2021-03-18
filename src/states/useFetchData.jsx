import { useEffect, useState } from 'react';

const SEARCH_URL = 'https://www.googleapis.com/youtube/v3/search';

export default function useFetchData(videoId) {
    const [response, setResponse] = useState([]);
    const [search, setSearch] = useState('wizeline');
    const relatedVideosUrl = videoId ? `&relatedToVideoId=${videoId}` : '';
    const maxResults = `&maxResults=${videoId ? '8' : '40'}`;
    const url = `${SEARCH_URL}?part=snippet${maxResults}&q=${search}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}&type=video${relatedVideosUrl}`;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const responseData = await fetch(url);
                const jsonResponse = await responseData.json();
                setResponse(jsonResponse);
            } catch (e) {
                console.error(e);
            }
        };

        fetchData();
    }, [url]);

    return { setSearch, response };
}
