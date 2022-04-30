import { FC } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./notConnectedPage/loginPage";

const NotConnectedRouter: FC = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<LoginPage />} />
        </Routes>
    </BrowserRouter>
);

export default NotConnectedRouter;
