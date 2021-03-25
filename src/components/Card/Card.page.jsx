import React from 'react';
import { useData } from '../../states/provider';
import { ACTIONS } from '../../states/reducer';
import Emoji from '../Emoji/Emoji';
import Button from '../Button/Button';
import Container, { Styled } from './Card.page.styled';

function Card({ item }) {
    const { videoId } = item.id;
    const title = item?.snippet?.title ?? '';
    const description = item?.snippet?.description ?? '';
    const image = item?.snippet?.thumbnails?.default.url;
    const width = item?.snippet?.thumbnails?.default?.width ?? 120;
    const height = item?.snippet?.thumbnails?.default?.height ?? 90;
    const { data, dispatch } = useData();

    function toggleFavoriteVideo() {
        dispatch({
            type: data.favoriteVideoList.has(videoId)
                ? ACTIONS.REMOVE_FROM_FAVORITES
                : ACTIONS.ADD_TO_FAVORITES,
            payload: { video: item },
        });
    }

    function handleSelectVideo() {
        const selectedVideo = item;

        dispatch({
            type: ACTIONS.CHANGE_SELECTED_VIDEO,
            payload: {
                selectedVideo,
            },
        });
    }

    return (
        <Container>
            <center>
                {' '}
                <Button size="2em" onClick={toggleFavoriteVideo}>
                    <Emoji symbol={data.favoriteVideoList.has(videoId) ? '⭐' : '✰'} />
                </Button>{' '}
                <Styled.Link to="/detailedVideo" onClick={handleSelectVideo}>
                    <h3>{title} </h3>
                    <img src={image} alt={title} width={width} height={height} />
                    <p> {description}</p>
                </Styled.Link>
            </center>
        </Container>
    );
}

export default Card;
