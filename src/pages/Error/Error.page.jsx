import React from 'react';
import image from './404_images.jpg';

function ErrorPage() {

    return (
        <center>
            <br />
            <h2>bad URL path or you do not have permissions to this page</h2>
            <br />
            <img src={image} alt="404" />
        </center>
    );
}

export default ErrorPage;
