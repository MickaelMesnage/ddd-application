import IUserRepository from "../secondary/IUser.repository";
import GetUserByEmailUseCase, { IGetUserByEmailUseCase } from "./getUserByEmail.usecase";
import GetUsersUseCase, { IGetUsersUseCase } from "./getUsers.usecase";

export interface IUserUseCase {
    getUsers: IGetUsersUseCase;
    getUserByEmail: IGetUserByEmailUseCase;
}

const userUseCase = (userRepository: IUserRepository) => ({
    getUserByEmail: new GetUserByEmailUseCase({ userRepository }),
    getUsers: new GetUsersUseCase({ userRepository })
});

export default userUseCase;
