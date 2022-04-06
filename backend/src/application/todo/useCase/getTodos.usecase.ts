import Todo from "../../../domain/todo/class/todo";
import ITodoRepository from "../../../right/repository/ITodo.repository";
import TodoPresenter, { TodoPresented } from "../todo.presenter";
import IGetTodosUseCase from "./IGetTodos.usecase";

export type GetTodosUseCaseDependencies = {
    todoRepository: ITodoRepository;
};

export default class GetTodosUseCase implements IGetTodosUseCase {
    constructor(private dependencies: GetTodosUseCaseDependencies) {}

    async execute(): Promise<Array<TodoPresented>> {
        const { todoRepository } = this.dependencies;
        const todos = await todoRepository.getTodosByUser();

        return todos.map((todo: Todo) => TodoPresenter.present(todo));
    }
}
