import IUserRepository from "../secondary/IUser.repository";
import CreateUserUseCase, { ICreateUserUseCase } from "./createUser.usecase";
import GetUserByEmailUseCase, { IGetUserByEmailUseCase } from "./getUserByEmail.usecase";
import GetUsersUseCase, { IGetUsersUseCase } from "./getUsers.usecase";

export interface IUserUseCase {
    getUsers: IGetUsersUseCase;
    getUserByEmail: IGetUserByEmailUseCase;
    createUser: ICreateUserUseCase;
}

const userUseCase = (userRepository: IUserRepository) => ({
    getUserByEmail: new GetUserByEmailUseCase({ userRepository }),
    getUsers: new GetUsersUseCase({ userRepository }),
    createUser: new CreateUserUseCase({ userRepository })
});

export default userUseCase;
