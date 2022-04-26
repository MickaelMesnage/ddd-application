import TodoList from "../../../domain/todo/class/todoList";
import ITodoRepository from "../../../driven/repository/todo/ITodo.repository";
import IGetTodosUseCase from "./IGetTodos.usecase";

export type GetTodosUseCaseDependencies = {
    todoRepository: ITodoRepository;
};

export default class GetTodosUseCase implements IGetTodosUseCase {
    constructor(private dependencies: GetTodosUseCaseDependencies) {}

    async execute(): Promise<TodoList> {
        const { todoRepository } = this.dependencies;
        const todos = await todoRepository.getTodosByUser();

        return todos;
    }
}
