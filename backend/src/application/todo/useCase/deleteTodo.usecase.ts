import Todo from "../../../domain/todo/class/todo";
import { TodoId } from "../../../domain/todo/type";
import { UserId } from "../../../domain/user/type";
import { TodoCantBeDeleteOrUpdateByUserError } from "../../../error/TodoCantBeDeleteOrUpdateByUserError";
import ITodoRepository from "../secondary/ITodo.repository";

export type DeleteTodoUseCasePort = {
    id: TodoId;
    userId: UserId;
};

export interface IDeleteTodoUseCase {
    execute(port: DeleteTodoUseCasePort): Promise<Array<Todo>>;
}

export type DeleteTodoUseCaseDependencies = {
    todoRepository: ITodoRepository;
};

export default class DeleteTodoUseCase implements IDeleteTodoUseCase {
    constructor(private dependencies: DeleteTodoUseCaseDependencies) {}

    async execute(port: DeleteTodoUseCasePort): Promise<Array<Todo>> {
        const { todoRepository } = this.dependencies;
        const { id, userId } = port;

        const todo = await todoRepository.getTodoById({ id });
        if (!todo.belongsToUser(userId)) {
            throw new TodoCantBeDeleteOrUpdateByUserError();
        }

        await todoRepository.deleteTodo({ id });
        const todos = await todoRepository.getTodosByUser({ userId });

        return todos;
    }
}
