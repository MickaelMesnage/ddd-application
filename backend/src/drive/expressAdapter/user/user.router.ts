import { Response, Request, Router } from "express";
import { IUserUseCase } from "../../../application/user/useCase";
import { CreateUserUseCasePort } from "../../../application/user/useCase/createUser.usecase";
import { EmailNotValidError } from "../../../error/EmailNotValidError";
import { authAdminMiddleware } from "../middleware";
import UsersPresenter from "./users.presenter";

const userRouter = (userUseCase: IUserUseCase): Router => {
    const router = Router();

    router.get("/list", authAdminMiddleware, async (req: Request, res: Response) => {
        const users = await userUseCase.getUsers.execute();

        return res.json({ users: UsersPresenter.present(users) });
    });

    router.post("/", authAdminMiddleware, async (req: Request, res: Response) => {
        const port = req.body as CreateUserUseCasePort;
        try {
            const users = await userUseCase.createUser.execute(port);

            return res.json({ users: UsersPresenter.present(users) });
        } catch (error) {
            if (error instanceof EmailNotValidError) {
                return res.sendStatus(400);
            }

            return res.sendStatus(500);
        }
    });

    return router;
};

export default userRouter;
