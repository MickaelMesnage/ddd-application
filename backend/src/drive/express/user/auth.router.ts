import { Response, Router } from "express";
import { IUserUseCase } from "../../../application/user/useCase";
import { UserEmail } from "../../../domain/user/type";
import { UserByEmailNotFoundError } from "../../../error/UserByEmailNotFoundError";
import RequestWithSession from "../requestWithSession";
import UserPresenter from "./user.presenter";

const authRouter = (userUseCase: IUserUseCase): Router => {
    const router = Router();

    router.post("/login", async (req: RequestWithSession, res: Response) => {
        const email = req.body.email as UserEmail;
        try {
            const user = await userUseCase.getUserByEmail.execute({ email });
            req.session.user = {
                id: user.id,
                email: user.email,
                isAdmin: user.isAdmin()
            };

            return res.json({ user: UserPresenter.present(user) });
        } catch (error) {
            if (error instanceof UserByEmailNotFoundError) {
                return res.sendStatus(404);
            }

            return res.sendStatus(500);
        }
    });

    router.post("/me", async (req: RequestWithSession, res: Response) => {
        const email = req.session.user?.email;
        if (email) {
            try {
                const user = await userUseCase.getUserByEmail.execute({ email });

                return res.json({ user: UserPresenter.present(user) });
            } catch (error) {
                // TODO send correct status
                return res.sendStatus(500);
            }
        }
        return res.json({ user: undefined });
    });

    // Use any type for req to use session destroy
    router.post("/logout", async (req: any, res: Response) => {
        req.session.destroy();

        res.json({});
    });

    return router;
};

export default authRouter;
