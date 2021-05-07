import React from 'react';
import { BrowserRouter, Route, Router, Switch } from 'react-router-dom';

import streamList from './compoments/streamList'
import StreamShow from './compoments/streamShow'
import StreamDelete from './compoments/streamDelete'
import StreamEdit from './compoments/streamEdit'
import StreamCreate from './compoments/streamCreate';
import Header from './compoments/header';

import History from './actions/history'

// 580145639656 - gvqe3dbeq3258d5u12ae7fh43edaqet3.apps.googleusercontent.com

const App = () => {
    return (
        <div className="ui container">
            <Router history={History}>
                <Header />
                <Switch>
                    <Route path='/' exact component={streamList} />
                    <Route path='/streams/new' component={StreamCreate} />
                    <Route path='/streams/edit/:id' component={StreamEdit} />
                    <Route path='/streams/delete/:id' component={StreamDelete} />
                    <Route path='/streams/:id' component={StreamShow} />
                </Switch>
            </Router>
        </div>
    )
}

export default App