import React, { useEffect } from 'react';
import Card from '../../components/Card/Card.page';
import { useData } from '../../states/provider';
import fetchReducerData from '../../states/fetchReducerData';
import Emoji from '../../components/Emoji/Emoji';
import Button from '../../components/Button/Button';
import ErrorPage from '../Error/Error.page';

function FavoritePage() {
    const { dispatch, data } = useData();
    const videoId = data.selectedVideo && data.selectedVideo.videoId;

    useEffect(() => {
        fetchReducerData(data.searchValue, videoId, dispatch);
    }, [data.searchValue, dispatch, videoId]);

    const elements = { items: [...data.favoriteVideoList.values()] };

    return (
        <center>
            {data.loginUser ? (
                <div>
                    <Button size="3em">
                        <Emoji symbol="💫 Favorite page 🌟" />
                    </Button>
                    <br />
                    <div>
                        {elements && elements.items && elements.items.length > 0 ? (
                            elements.items.map((item) => (
                                <Card key={item.etag} item={item} />
                            ))
                        ) : (
                            <h2>There's no Favorite videos yet</h2>
                        )}
                    </div>
                </div>
            ) : (
                <ErrorPage />
            )}
        </center>
    );
}

export default FavoritePage;
