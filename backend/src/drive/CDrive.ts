import { ITodoUseCase } from "../application/todo/useCase/Todo.usecase";

export type CDriveDependencies = {
    todoUseCase: ITodoUseCase;
};

abstract class CDrive {
    protected _dependencies: CDriveDependencies;

    constructor(props: CDriveDependencies) {
        this._dependencies = props;
    }

    public abstract start(): void;
}

export default CDrive;
