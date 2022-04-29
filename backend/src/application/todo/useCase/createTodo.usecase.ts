import Todo from "../../../domain/todo/class/todo";
import { TodoId, TodoStatus, TodoSubject } from "../../../domain/todo/type";
import ITodoRepository from "../secondary/ITodo.repository";

export type CreateTodoUseCasePort = {
    subject: TodoSubject;
};

export interface ICreateTodoUseCase {
    execute(port: CreateTodoUseCasePort): Promise<void>;
}

export type CreateTodoUseCaseDependencies = {
    todoRepository: ITodoRepository;
};

export default class CreateTodoUseCase implements ICreateTodoUseCase {
    constructor(private dependencies: CreateTodoUseCaseDependencies) {}

    async execute(port: CreateTodoUseCasePort): Promise<void> {
        const { todoRepository } = this.dependencies;
        const newTodo = new Todo({ subject: port.subject });
        await todoRepository.createTodo({
            id: newTodo.id,
            subject: newTodo.subject,
            isChecked: newTodo.isChecked
        });
    }
}
