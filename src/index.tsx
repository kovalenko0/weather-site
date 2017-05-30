import * as React from "react";
import * as ReactDOM from "react-dom";

import { AppView } from "./components/app-view";
import { AppModel } from './model'

ReactDOM.render(
    <AppView model={new AppModel()}/>,
    document.getElementById("app")
);