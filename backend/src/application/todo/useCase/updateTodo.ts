import Todo from "../../../domain/todo/class/todo";
import ITodoRepository from "../../../right/repository/ITodo.repository";
import TodoPort from "../todo.port";
import IUpdateTodoUseCase from "./IUpdateTodo.usecase";

export type UpdateTodoUseCaseDependencies = {
    todoRepository: ITodoRepository;
};

export default class UpdateTodoUseCase implements IUpdateTodoUseCase {
    constructor(private dependencies: UpdateTodoUseCaseDependencies) {}

    async execute(todoPort: TodoPort): Promise<void> {
        const { todoRepository } = this.dependencies;
        console.log("update todo with port", todoPort);
        const todo = new Todo(todoPort);
        console.log("update todo with", todo);
        await todoRepository.updateTodo(todo);
    }
}
