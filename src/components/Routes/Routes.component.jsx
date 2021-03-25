import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from '../../pages/Home/Home.page';
import FavoritePage from '../../pages/Favorites/Favorite.page';
import ErrorPage from '../../pages/Error/Error.page';
import VideoPage from '../../pages/Video/Video.page';
import VideoListPage from '../../pages/VideoList/VideoList.page';

export default function Routes() {
    return (
        <>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/home" component={VideoListPage} />
                <Route path="/detailedVideo" component={VideoPage} />
                <Route path="/favorite" component={FavoritePage} />
                <Route path="/error" component={ErrorPage} />
                <Route path="*" component={ErrorPage} />
            </Switch>
        </>
    );
}
