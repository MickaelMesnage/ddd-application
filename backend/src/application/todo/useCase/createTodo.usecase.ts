import Todo from "../../../domain/todo/class/todo";
import { TodoSubject } from "../../../domain/todo/type";
import { UserId } from "../../../domain/user/type";
import ITodoRepository from "../secondary/ITodo.repository";

export type CreateTodoUseCasePort = {
    subject: TodoSubject;
    userId: UserId;
};

export interface ICreateTodoUseCase {
    execute(port: CreateTodoUseCasePort): Promise<Array<Todo>>;
}

export type CreateTodoUseCaseDependencies = {
    todoRepository: ITodoRepository;
};

export default class CreateTodoUseCase implements ICreateTodoUseCase {
    constructor(private dependencies: CreateTodoUseCaseDependencies) {}

    async execute(port: CreateTodoUseCasePort): Promise<Array<Todo>> {
        const { todoRepository } = this.dependencies;
        const { subject, userId } = port;
        const newTodo = new Todo({ subject, userId });
        await todoRepository.createTodo({
            id: newTodo.id,
            subject: newTodo.subject,
            isChecked: newTodo.isChecked,
            userId: newTodo.userId
        });

        const todos = await todoRepository.getTodosByUser({ userId });

        return todos;
    }
}
