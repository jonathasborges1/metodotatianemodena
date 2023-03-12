import React from "react";
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import ROUTES from "@config/routes";
// import About from "@pages/about";
import Home from "@pages/home";
import PrivacyPolicy from "@pages/policy";
import Terms from "@pages/terms";
import Thanks from "@pages/thanks";

const Routes: React.FC = ({ ...props}) => {
    return(
        <BrowserRouter> 
            <Switch>
                <Route exact path={ROUTES.HOME} component={Home}/>
                <Route path={ROUTES.POLICY} component={PrivacyPolicy} />
                <Route path={ROUTES.TERMS} component={Terms} />
                <Route path={ROUTES.THANKS} component={Thanks} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;

