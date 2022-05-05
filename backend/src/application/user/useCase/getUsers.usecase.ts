import User from "../../../domain/user/class/user";
import IUserRepository from "../secondary/IUser.repository";

export interface IGetUsersUseCase {
    execute(): Promise<Array<User>>;
}

export type GetUserByIdUseCaseDependencies = {
    userRepository: IUserRepository;
};

export default class GetUsersUseCase implements IGetUsersUseCase {
    constructor(private dependencies: GetUserByIdUseCaseDependencies) {}

    async execute(): Promise<Array<User>> {
        const { userRepository } = this.dependencies;
        const users = await userRepository.getUsers();

        return users;
    }
}
