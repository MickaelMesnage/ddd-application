import Email from "../../../domain/core/email";
import User from "../../../domain/user/class/user";
import { UserEmail, UserIsAdmin, UserProfile } from "../../../domain/user/type";
import { EmailNotValidError } from "../../../error/EmailNotValidError";
import IUserRepository from "../secondary/IUser.repository";

export type CreateUserUseCasePort = {
    email: UserEmail;
    isAdmin: UserIsAdmin;
};

export interface ICreateUserUseCase {
    execute(port: CreateUserUseCasePort): Promise<Array<User>>;
}

export type GetUserByIdUseCaseDependencies = {
    userRepository: IUserRepository;
};

export default class CreateUserUseCase implements ICreateUserUseCase {
    constructor(private dependencies: GetUserByIdUseCaseDependencies) {}

    async execute(port: CreateUserUseCasePort): Promise<Array<User>> {
        const { userRepository } = this.dependencies;
        const { email, isAdmin } = port;

        if (!Email.isValid(email)) {
            throw new EmailNotValidError();
        }

        const newUser = new User({
            email,
            profile: isAdmin ? UserProfile.ADMIN : UserProfile.USER
        });

        await userRepository.createUser({
            id: newUser.id,
            email: newUser.email,
            profile: newUser.profile
        });

        const users = await userRepository.getUsers();

        return users;
    }
}
