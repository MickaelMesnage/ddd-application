import TodoPort from "./todo.port";

interface IUpdateTodoUseCase {
    execute(todoPort: TodoPort): Promise<void>;
}

export default IUpdateTodoUseCase;
