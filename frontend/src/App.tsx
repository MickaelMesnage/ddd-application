import React, { FC } from "react";
import { Provider } from "react-redux";
import store from "adapter/redux/store";
import Router from "./router";
import "./index.css";
import AuthInitializer from "./UI/user/authInitializer";

const App: FC = () => (
    <Provider store={store}>
        <AuthInitializer>
            <Router />
        </AuthInitializer>
    </Provider>
);

export default App;
