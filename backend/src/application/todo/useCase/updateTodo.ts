import { TodoId, TodoIsChecked, TodoSubject } from "../../../domain/todo/type";
import ITodoRepository from "../secondary/ITodo.repository";

export type UpdateTodoUseCasePort = {
    id: TodoId;
    subject: TodoSubject;
    isChecked: TodoIsChecked;
};

export interface IUpdateTodoUseCase {
    execute(port: UpdateTodoUseCasePort): Promise<void>;
}

export type UpdateTodoUseCaseDependencies = {
    todoRepository: ITodoRepository;
};

export default class UpdateTodoUseCase implements IUpdateTodoUseCase {
    constructor(private dependencies: UpdateTodoUseCaseDependencies) {}

    async execute(port: UpdateTodoUseCasePort): Promise<void> {
        const { todoRepository } = this.dependencies;
        const { id, subject, isChecked } = port;
        const todoToUpdate = await todoRepository.getTodoById({ id });
        todoToUpdate.update({ subject, isChecked });

        await todoRepository.updateTodo({
            id: todoToUpdate.id,
            subject: todoToUpdate.subject,
            isChecked: todoToUpdate.isChecked
        });
    }
}
