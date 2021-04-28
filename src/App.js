import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import streamList from './compoments/streamList'
import StreamShow from './compoments/streamShow'
import StreamDelete from './compoments/streamDelete'
import StreamEdit from './compoments/streamEdit'
import StreamCreate from './compoments/streamCreate';
import Header from './compoments/header';

const App = () => {
    return (

        <div className="ui container">
            <BrowserRouter>
                <Header />
                <Route path='/' exact component={streamList} />
                <Route path='/streams/new' component={StreamCreate} />
                <Route path='/streams/edit' component={StreamEdit} />
                <Route path='/streams/delete' component={StreamDelete} />
                <Route path='/streams/show' component={StreamShow} />
            </BrowserRouter>
        </div>
    )
}

export default App