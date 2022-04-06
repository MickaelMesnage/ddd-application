interface ICreateTodoUseCase {
    execute(todoSubject: string): Promise<void>;
}

export default ICreateTodoUseCase;
