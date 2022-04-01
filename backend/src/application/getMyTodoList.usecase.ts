import TodoList from "../domain/todo/todoList";
import ITodoListRepository from "../right/repository/ITodoList.repository";
import { UseCase } from "./UseCase";

export type GetMyTodoListUseCaseDependencies = {
    todoListRepository: ITodoListRepository;
};

export default class GetMyTodoListUseCase implements UseCase {
    constructor(private dependencies: GetMyTodoListUseCaseDependencies) {}

    async execute(): Promise<TodoList> {
        const { todoListRepository } = this.dependencies;

        const todoList = await todoListRepository.getTodoList();

        return todoList;
    }
}
