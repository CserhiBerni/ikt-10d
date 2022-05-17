import React from "react";
import { Route, Switch } from "react-router-dom";
import Main from "./components/main/Main"
import NotFound from "./components/404/NotFound";
import Bernat from "./components/bernat/Bernat";
import Krisztian from "./components/krisztian/Krisztian";
/* import Tictactoe from "./components/tictactoe/Tictactoe";
 */
function Router() {
    return (
        <div className="App">
            <Switch>
                <Route exact path="/" component={Main} />
                <Route exact path="/bernat" component={Bernat} />
                <Route exact path="/krisztian" component={Krisztian} />
{/*                 <Route exact path="/tictactoe" component={Tictactoe} />
 */}                <Route component={NotFound} />
            </Switch>
        </div>
    );
}

export default Router;