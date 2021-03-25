import React, { useEffect } from 'react';
import Card from '../../components/Card/Card.page';
import { useData } from '../../states/provider';
import fetchReducerData from '../../states/fetchReducerData';

function VideoListPage() {
    const { dispatch, data } = useData();
    const videoId = data.selectedVideo && data.selectedVideo.videoId;

    useEffect(() => {
        fetchReducerData(data.searchValue, videoId, dispatch);
    }, [data.searchValue, dispatch, videoId]);

    const elements = data.videosAvailables;

    console.log(elements);

    return (
        <div>
            {elements &&
                elements.items &&
                elements.items.map((item) => <Card item={item} key={item.etag} />)}
        </div>
    );
}

export default VideoListPage;
