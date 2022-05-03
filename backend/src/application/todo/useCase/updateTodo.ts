import Todo from "../../../domain/todo/class/todo";
import { TodoId, TodoIsChecked, TodoSubject } from "../../../domain/todo/type";
import { UserId } from "../../../domain/user/type";
import { TodoCantBeDeleteOrUpdateByUserError } from "../../../error/TodoCantBeDeleteOrUpdateByUserError";
import ITodoRepository from "../secondary/ITodo.repository";

export type UpdateTodoUseCasePort = {
    id: TodoId;
    subject: TodoSubject;
    isChecked: TodoIsChecked;
    userId: UserId;
};

export interface IUpdateTodoUseCase {
    execute(port: UpdateTodoUseCasePort): Promise<Array<Todo>>;
}

export type UpdateTodoUseCaseDependencies = {
    todoRepository: ITodoRepository;
};

export default class UpdateTodoUseCase implements IUpdateTodoUseCase {
    constructor(private dependencies: UpdateTodoUseCaseDependencies) {}

    async execute(port: UpdateTodoUseCasePort): Promise<Array<Todo>> {
        const { todoRepository } = this.dependencies;
        const { id, subject, isChecked, userId } = port;
        const todoToUpdate = await todoRepository.getTodoById({ id });

        if (!todoToUpdate.belongsToUser(userId)) {
            throw new TodoCantBeDeleteOrUpdateByUserError();
        }

        todoToUpdate.update({ subject, isChecked });

        await todoRepository.updateTodo({
            id: todoToUpdate.id,
            subject: todoToUpdate.subject,
            isChecked: todoToUpdate.isChecked,
            userId: todoToUpdate.userId
        });

        const todos = await todoRepository.getTodosByUser({ userId });

        return todos;
    }
}
