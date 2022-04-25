import TodoPort from "../todo.port";

export type UpdateTodoPort = TodoPort;

interface IUpdateTodoUseCase {
    execute(todoPort: UpdateTodoPort): Promise<void>;
}

export default IUpdateTodoUseCase;
