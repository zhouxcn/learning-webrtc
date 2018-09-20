import * as React   from 'react';
import { Route }    from 'react-router-dom';
import {
    HomePage,
    AboutPage
}   from './Components';

export const Routes = () => (
    <div className="content">
        <Route exact={true} path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
    </div>
);