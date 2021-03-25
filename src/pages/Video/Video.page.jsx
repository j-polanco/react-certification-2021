import React, { useEffect } from 'react';
import ReactPlayer from 'react-player';
import styled from 'styled-components';
import fetchReducerData from '../../states/fetchReducerData';
import { useData } from '../../states/provider';
import VideoListPage from '../VideoList/VideoList.page';
import { ACTIONS } from '../../states/reducer';
import Emoji from '../../components/Emoji/Emoji';
import Button from '../../components/Button/Button';

const Video = styled.div`
    border-style: solid;
    margin: 1em;
    height: 50%;
    padding: 1em;
    border-radius: 1em;
    display: block;
    justify-content: space-between;
    background-color: #d47b7b;
    word-wrap: break-word;
    transition: 0.5s;
`;

const RelatedVideos = styled.div`
    margin: 1em;
    height: 20%;
    padding: 1em;
    border-radius: 1em;
    background-color: #d47b7b;
    display: inline-block;
`;

function VideoPage() {
    const { data, dispatch } = useData();
    const item = data.selectedVideo;
    const { videoId } = item?.id ?? '';
    const title = item?.snippet?.title ?? '';
    const description = item?.snippet?.description ?? '';

    function toggleFavoriteVideo() {
        dispatch({
            type: data.favoriteVideoList.has(videoId)
                ? ACTIONS.REMOVE_FROM_FAVORITES
                : ACTIONS.ADD_TO_FAVORITES,
            payload: { video: { videoId, title, description } },
        });
    }

    useEffect(() => {
        fetchReducerData(data.searchValue, videoId, dispatch);
    }, [data.searchValue, dispatch, videoId]);

    return (
        <center>
            {data.selectedVideo ? (
                <div>
                    <Video>
                        <h1>
                            <Button size="2em" onClick={toggleFavoriteVideo}>
                                <Emoji
                                    symbol={
                                        data.favoriteVideoList.has(videoId) ? '⭐' : '✰'
                                    }
                                />
                            </Button>{' '}
                            {title}{' '}
                        </h1>
                        <hr />
                        <ReactPlayer
                            controls
                            config={{ file: { forceHLS: true } }}
                            url={`https://www.youtube.com/watch?v=${videoId}`}
                        />
                        <p> {description}</p>
                    </Video>

                    <RelatedVideos>
                        <h2>Related Videos</h2>
                        <hr />
                        <br />
                        <VideoListPage />
                    </RelatedVideos>
                </div>
            ) : (
                <h2>There's no video selected</h2>
            )}
        </center>
    );
}

export default VideoPage;
