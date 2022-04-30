import { ITodoUseCase } from "../application/todo/useCase/Todo.usecase";
import { IUserUseCase } from "../application/user/useCase";

export type CDriveDependencies = {
    todoUseCase: ITodoUseCase;
    userUseCase: IUserUseCase;
};

abstract class CDrive {
    protected _dependencies: CDriveDependencies;

    constructor(props: CDriveDependencies) {
        this._dependencies = props;
    }

    public abstract start(): void;
}

export default CDrive;
