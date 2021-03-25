import React from 'react';
import VideoPage from '../Video/Video.page';
import VideoListPage from '../VideoList/VideoList.page';
import { useData } from '../../states/provider';

function HomePage() {
    const { data } = useData();

    return data.selectedVideo ? <VideoPage /> : <VideoListPage />;
}

export default HomePage;
