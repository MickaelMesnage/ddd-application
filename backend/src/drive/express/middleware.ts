import { NextFunction, Response } from "express";
import { UserProfile } from "../../domain/user/type";
import RequestWithSession from "./requestWithSession";

export const authMiddleware = (req: RequestWithSession, res: Response, next: NextFunction) => {
    console.log("zzz", req.session);
    if (req.session && req.session.email) return next();
    else return res.sendStatus(401);
};

export const authAdminMiddleware = (req: RequestWithSession, res: Response, next: NextFunction) => {
    if (req.session && req.session.email && req.session.profile === UserProfile.ADMIN)
        return next();
    else return res.sendStatus(403);
};
