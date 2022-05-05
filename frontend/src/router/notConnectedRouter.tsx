import { FC } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./notConnectedPage/homePage";
import LoginPage from "./notConnectedPage/loginPage";

const NotConnectedRouter: FC = () => (
    <BrowserRouter>
        <Routes>
            <Route index element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    </BrowserRouter>
);

export default NotConnectedRouter;
