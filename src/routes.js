import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './components/home/home';
import Layout from './hoc/layout/layout';

import NewsArticles from './components/Articles/News/Post/index';

import VideoArticle from './components/Articles/Videos/Video/index';

export class Routes extends Component {

    render() {
        return (
            <Layout>
                <Switch>
                    <Route path="/videos/:id" exact component={VideoArticle}></Route>
                    <Route path="/article/:id" exact component={NewsArticles}></Route>
                    <Route path="/" exact component={Home}></Route>

                </Switch>
            </Layout>

        )
    }
}

export default Routes;