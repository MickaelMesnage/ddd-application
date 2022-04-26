import Todo from "../../../domain/todo/class/todo";
import ITodoRepository from "../../../driven/repository/todo/ITodo.repository";
import IUpdateTodoUseCase, { UpdateTodoPort } from "./IUpdateTodo.usecase";

export type UpdateTodoUseCaseDependencies = {
    todoRepository: ITodoRepository;
};

export default class UpdateTodoUseCase implements IUpdateTodoUseCase {
    constructor(private dependencies: UpdateTodoUseCaseDependencies) {}

    async execute(todoPort: UpdateTodoPort): Promise<void> {
        const { todoRepository } = this.dependencies;
        const todo = new Todo(todoPort);
        await todoRepository.updateTodo(todo);
    }
}
