import { Request } from "express";
import { UserEmail, UserId } from "../../domain/user/type";

type RequestWithSession = Request & {
    session: {
        user?: {
            id: UserId;
            email: UserEmail;
            isAdmin: boolean;
        };
    };
};

export default RequestWithSession;
