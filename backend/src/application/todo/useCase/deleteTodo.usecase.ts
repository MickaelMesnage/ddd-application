import { TodoId } from "../../../domain/todo/type";
import ITodoRepository from "../secondary/ITodo.repository";

export type DeleteTodoUseCasePort = {
    id: TodoId;
};

export interface IDeleteTodoUseCase {
    execute(port: DeleteTodoUseCasePort): Promise<void>;
}

export type DeleteTodoUseCaseDependencies = {
    todoRepository: ITodoRepository;
};

export default class DeleteTodoUseCase implements IDeleteTodoUseCase {
    constructor(private dependencies: DeleteTodoUseCaseDependencies) {}

    async execute(port: DeleteTodoUseCasePort): Promise<void> {
        const { todoRepository } = this.dependencies;
        const { id } = port;

        // Check todo exist and user can delete this todo
        await todoRepository.deleteTodo({ id });
    }
}
