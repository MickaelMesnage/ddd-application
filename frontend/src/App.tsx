import React, { FC } from "react";
import { Provider } from "react-redux";
import store from "adapter/redux/store";
import Router from "./router";

const App: FC = () => (
    <Provider store={store}>
        <Router />
    </Provider>
);

export default App;
