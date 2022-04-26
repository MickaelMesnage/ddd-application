import Todo from "../../../domain/todo/class/todo";
import ITodoRepository from "../../../driven/repository/todo/ITodo.repository";
import ICreateTodoUseCase from "./ICreateTodo.usecase";

export type CreateTodoUseCaseDependencies = {
    todoRepository: ITodoRepository;
};

export default class CreateTodoUseCase implements ICreateTodoUseCase {
    constructor(private dependencies: CreateTodoUseCaseDependencies) {}

    async execute(todoSubject: string): Promise<void> {
        const { todoRepository } = this.dependencies;
        const newTodo = new Todo({ subject: todoSubject });
        await todoRepository.createTodo(newTodo);
    }
}
