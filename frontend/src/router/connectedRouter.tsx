import { FC } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomeConnectedPage from "./connectedPage/homeConnectedPage";
import MyTodoListPage from "./connectedPage/myTodoListPage";
import UsersPage from "./connectedPage/usersPage";

// Todo handle isAdmin to add route for admin

const ConnectedRouter: FC = () => (
    <BrowserRouter>
        <Routes>
            <Route index element={<HomeConnectedPage />} />
            <Route path="users" element={<UsersPage />} />
            <Route path="todos" element={<MyTodoListPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    </BrowserRouter>
);

export default ConnectedRouter;
