import { NextFunction, Response } from "express";
import RequestWithSession from "./requestWithSession";

export const authMiddleware = (req: RequestWithSession, res: Response, next: NextFunction) => {
    if (req.session && req.session.user) return next();
    else return res.sendStatus(401);
};

export const authAdminMiddleware = (req: RequestWithSession, res: Response, next: NextFunction) => {
    if (req.session && req.session.user && req.session.user.isAdmin) return next();
    else return res.sendStatus(403);
};
