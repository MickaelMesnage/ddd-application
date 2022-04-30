import { Request, Response, Router } from "express";
import { IUserUseCase } from "../../../application/user/useCase";
import { UserEmail, UserProfile } from "../../../domain/user/type";
import { UserByEmailNotFoundError } from "../../../error/UserByEmailNotFoundError";
import UserPresenter from "./user.presenter";

type Session = {
    email: UserEmail;
    profile: UserProfile;
};

const userRouter = (userUseCase: IUserUseCase): Router => {
    const router = Router();

    router.post("/login", async (req: Request, res: Response & { session: Session }) => {
        const email = req.body.email as UserEmail;
        try {
            const user = await userUseCase.getUserByEmail.execute({ email });
            res.session = { email, profile: user.profile };

            return res.json({ user: UserPresenter.present(user) });
        } catch (error) {
            if (error instanceof UserByEmailNotFoundError) {
                return res.status(404).send();
            }

            return res.status(500).send();
        }
    });

    router.post("/logout", async (req: Request, res: Response & { session: Session }) => {
        res.session.email = null;
        res.session.profile = null;

        res.json({});
    });

    return router;
};

export default userRouter;
