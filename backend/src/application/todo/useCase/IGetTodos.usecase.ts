import { TodoPresented } from "../todo.presenter";

interface IGetTodosUseCase {
    execute(): Promise<Array<TodoPresented>>;
}

export default IGetTodosUseCase;
