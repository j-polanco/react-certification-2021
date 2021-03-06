import React from 'react';
import ReactPlayer from 'react-player';
import styled from 'styled-components';
import useFetchData from '../../states/useFetchData';
import Card from '../Card/Card.page';

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

function VideoPage({ video, selectVideo }) {
    const { videoId, title, description } = video;
    const { response } = useFetchData(videoId);

    console.log('relatedVideos', response);

    return (
        <center>
            <Video>
                <h1> {title} </h1>
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
                {response &&
                    response.items &&
                    response.items.map((item) => (
                        <Card
                            key={item.etag}
                            videoId={item.id.videoId}
                            title={item.snippet.title}
                            description={item.snippet.description}
                            image={item.snippet.thumbnails.default.url}
                            width={item.snippet.thumbnails.default?.width ?? 120}
                            height={item.snippet.thumbnails.default?.height ?? 90}
                            selectVideo={selectVideo}
                        />
                    ))}
            </RelatedVideos>
        </center>
    );
}

export default VideoPage;
