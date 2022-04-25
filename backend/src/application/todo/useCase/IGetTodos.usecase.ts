import Todo from "../../../domain/todo/class/todo";

interface IGetTodosUseCase {
    execute(): Promise<Array<Todo>>;
}

export default IGetTodosUseCase;
