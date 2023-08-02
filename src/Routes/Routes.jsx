import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from '../Pages/HomePage';




const Routes = () => {
    return (
        <Switch>

            {/* ---------------------------------------- HOMEPAGE ---------------------------------- */}
            <Route path="/" exact>
                <HomePage />
            </Route>

        </Switch>
    )
}

export default Routes;