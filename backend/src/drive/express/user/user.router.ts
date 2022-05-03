import { Response, Request, Router } from "express";
import { IUserUseCase } from "../../../application/user/useCase";
import { authAdminMiddleware } from "../middleware";
import UsersPresenter from "./users.presenter";

const userRouter = (userUseCase: IUserUseCase): Router => {
    const router = Router();

    router.get("/list", authAdminMiddleware, async (req: Request, res: Response) => {
        const users = await userUseCase.getUsers.execute();

        return res.json({ users: UsersPresenter.present(users) });
    });

    return router;
};

export default userRouter;
