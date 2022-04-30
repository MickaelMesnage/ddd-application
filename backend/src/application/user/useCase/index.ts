import IUserRepository from "../secondary/IUser.repository";
import GetUserByEmailUseCase, { IGetUserByEmailUseCase } from "./getUserByEmail.usecase";

export interface IUserUseCase {
    getUserByEmail: IGetUserByEmailUseCase;
}

const userUseCase = (userRepository: IUserRepository) => ({
    getUserByEmail: new GetUserByEmailUseCase({ userRepository })
});

export default userUseCase;
