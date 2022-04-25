import { TodoId } from "../../../domain/todo/type";

interface IDeleteTodoUseCase {
    execute(todoId: TodoId): Promise<void>;
}

export default IDeleteTodoUseCase;
