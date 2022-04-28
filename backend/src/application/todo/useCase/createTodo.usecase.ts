import Todo from "../../../domain/todo/class/todo";
import { TodoSubject } from "../../../domain/todo/type";
import ITodoRepository from "../../../driven/repository/todo/ITodo.repository";

export interface ICreateTodoUseCase {
    execute(todoSubject: string): Promise<void>;
}

export type CreateTodoUseCaseDependencies = {
    todoRepository: ITodoRepository;
};

export default class CreateTodoUseCase implements ICreateTodoUseCase {
    constructor(private dependencies: CreateTodoUseCaseDependencies) {}

    async execute(todoSubject: TodoSubject): Promise<void> {
        const { todoRepository } = this.dependencies;
        const newTodo = new Todo({ subject: todoSubject });
        await todoRepository.createTodo(newTodo);
    }
}
