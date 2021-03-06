import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 22%;
    height: 20em;
    border-style: solid;
    margin: 1em;
    border-radius: 1em;
    display: flex;
    justify-content: space-between;
    float: left;
    background-color: #d47b7b;
    text-overflow: ellipsis;
    overflow: hidden;
`;

function Card({ videoId, title, description, image, width, height, selectVideo }) {
    return (
        <Container
            onClick={() => {
                const val = {
                    videoId,
                    title,
                    description,
                };

                selectVideo(val);
            }}
        >
            <center>
                <h3> {title} </h3>
                <img src={image} alt={title} width={width} height={height} />
                <p> {description}</p>
            </center>
        </Container>
    );
}

export default Card;
