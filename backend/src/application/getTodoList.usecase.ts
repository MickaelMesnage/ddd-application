import TodoList from "../domain/todo/todoList";
import ITodoListRepository from "../right/repository/ITodoList.repository";
import { UseCase } from "./UseCase";

export type GetTodoListUseCaseDependencies = {
    todoListRepository: ITodoListRepository;
};

export default class GetTodoListUseCase implements UseCase {
    constructor(private dependencies: GetTodoListUseCaseDependencies) {}

    async execute(): Promise<TodoList> {
        const { todoListRepository } = this.dependencies;

        const todoList = await todoListRepository.getTodoList();

        return todoList;
    }
}
