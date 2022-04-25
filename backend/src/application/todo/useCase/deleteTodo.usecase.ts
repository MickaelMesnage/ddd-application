import { TodoId } from "../../../domain/todo/type";
import ITodoRepository from "../../../driven/repository/ITodo.repository";
import IDeleteTodoUseCase from "./IDeleteTodo.usecase";

export type DeleteTodoUseCaseDependencies = {
    todoRepository: ITodoRepository;
};

export default class DeleteTodoUseCase implements IDeleteTodoUseCase {
    constructor(private dependencies: DeleteTodoUseCaseDependencies) {}

    async execute(todoId: TodoId): Promise<void> {
        const { todoRepository } = this.dependencies;

        // Check todo exist and user can delete this todo
        await todoRepository.deleteTodo(todoId);
    }
}
