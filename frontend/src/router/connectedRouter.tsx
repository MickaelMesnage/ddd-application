import { FC } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MyTodoListPage from "./connectedPage/myTodoListPage";
import UsersPage from "./connectedPage/usersPage";
import HomePage from "./notConnectedPage/homePage";

// Todo handle isAdmin to add route for admin

const ConnectedRouter: FC = () => (
    <BrowserRouter>
        <Routes>
            <Route index element={<HomePage />} />
            <Route path="users" element={<UsersPage />} />
            <Route path="todos" element={<MyTodoListPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    </BrowserRouter>
);

export default ConnectedRouter;
