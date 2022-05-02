import { Response, Router } from "express";
import { IUserUseCase } from "../../../application/user/useCase";
import { UserEmail } from "../../../domain/user/type";
import { UserByEmailNotFoundError } from "../../../error/UserByEmailNotFoundError";
import RequestWithSession from "../requestWithSession";
import UserPresenter from "./user.presenter";

const userRouter = (userUseCase: IUserUseCase): Router => {
    const router = Router();

    router.post("/login", async (req: RequestWithSession, res: Response) => {
        const email = req.body.email as UserEmail;
        try {
            const user = await userUseCase.getUserByEmail.execute({ email });
            req.session.email = email;
            req.session.profile = user.profile;
            console.log("req.session", req.session);

            return res.json({ user: UserPresenter.present(user) });
        } catch (error) {
            console.log(error);
            if (error instanceof UserByEmailNotFoundError) {
                return res.sendStatus(404);
            }

            return res.sendStatus(500);
        }
    });

    router.post("/logout", async (req: RequestWithSession, res: Response) => {
        req.session.email = null;
        req.session.profile = null;

        res.json({});
    });

    return router;
};

export default userRouter;
