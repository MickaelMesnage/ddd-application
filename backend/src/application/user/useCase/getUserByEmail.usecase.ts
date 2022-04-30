import User from "../../../domain/user/class/user";
import { UserEmail } from "../../../domain/user/type";
import IUserRepository from "../secondary/IUser.repository";

export type GetUserByEmailUseCasePort = {
    email: UserEmail;
};

export interface IGetUserByEmailUseCase {
    execute(port: GetUserByEmailUseCasePort): Promise<User>;
}

export type GetUserByIdUseCaseDependencies = {
    userRepository: IUserRepository;
};

export default class GetUserByEmailUseCase implements IGetUserByEmailUseCase {
    constructor(private dependencies: GetUserByIdUseCaseDependencies) {}

    async execute(port: GetUserByEmailUseCasePort): Promise<User> {
        const { userRepository } = this.dependencies;
        const user = await userRepository.getUserByEmail(port);

        return user;
    }
}
