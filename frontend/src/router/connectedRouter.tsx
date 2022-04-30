import { FC } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyTodoListPage from "./connectedPage/myTodoList";

const ConnectedRouter: FC = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<MyTodoListPage />} />
        </Routes>
    </BrowserRouter>
);

export default ConnectedRouter;
