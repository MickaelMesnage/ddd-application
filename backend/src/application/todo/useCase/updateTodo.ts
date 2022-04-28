import Todo from "../../../domain/todo/class/todo";
import { TodoProps } from "../../../domain/todo/type";
import ITodoRepository from "../../../driven/repository/todo/ITodo.repository";

export interface IUpdateTodoUseCase {
    execute(todoProps: TodoProps): Promise<void>;
}

export type UpdateTodoUseCaseDependencies = {
    todoRepository: ITodoRepository;
};

export default class UpdateTodoUseCase implements IUpdateTodoUseCase {
    constructor(private dependencies: UpdateTodoUseCaseDependencies) {}

    async execute(todoProps: TodoProps): Promise<void> {
        const { todoRepository } = this.dependencies;
        const todo = new Todo(todoProps);
        await todoRepository.updateTodo(todo);
    }
}
