import { Request } from "express";
import { UserEmail, UserProfile } from "../../domain/user/type";

type RequestWithSession = Request & {
    session?: {
        email: UserEmail;
        profile: UserProfile;
    };
};

export default RequestWithSession;
