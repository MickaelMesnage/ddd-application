import Todo from "../../../domain/todo/class/todo";
import { UserId } from "../../../domain/user/type";
import ITodoRepository from "../secondary/ITodo.repository";

export interface IGetTodosUseCase {
    execute(userId: UserId): Promise<Array<Todo>>;
}

export type GetTodosUseCaseDependencies = {
    todoRepository: ITodoRepository;
};

export default class GetTodosUseCase implements IGetTodosUseCase {
    constructor(private dependencies: GetTodosUseCaseDependencies) {}

    async execute(userId: UserId): Promise<Array<Todo>> {
        const { todoRepository } = this.dependencies;
        const todos = await todoRepository.getTodosByUser({ userId });

        return todos;
    }
}
