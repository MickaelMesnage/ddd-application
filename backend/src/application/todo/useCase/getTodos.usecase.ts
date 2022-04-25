import Todo from "../../../domain/todo/class/todo";
import ITodoRepository from "../../../driven/repository/ITodo.repository";
import IGetTodosUseCase from "./IGetTodos.usecase";

export type GetTodosUseCaseDependencies = {
    todoRepository: ITodoRepository;
};

export default class GetTodosUseCase implements IGetTodosUseCase {
    constructor(private dependencies: GetTodosUseCaseDependencies) {}

    async execute(): Promise<Array<Todo>> {
        const { todoRepository } = this.dependencies;
        const todos = await todoRepository.getTodosByUser();

        return todos;
    }
}
