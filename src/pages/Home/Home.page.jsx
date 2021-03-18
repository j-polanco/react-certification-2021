import React from 'react';
import Card from '../Card/Card.page';
import { useData } from '../../states/provider';

function HomePage({ selectVideo }) {
    const { data } = useData();
    const elements = data.data;

    return (
        <div>
            {elements &&
                elements.items &&
                elements.items.map((item) => (
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
        </div>
    );
}

export default HomePage;
