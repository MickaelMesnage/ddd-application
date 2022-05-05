import * as readline from "readline";
import * as util from "util";
import User from "../../domain/user/class/user";
import CDrive, { CDriveDependencies } from "../CDrive";

enum Step {
    NotConnected = "NOT_CONNECTED",
    Connected = "CONNECTED",
    TodoList = "TODO_LIST",
    CreateTodo = "CREATE_TODO",
    UserList = "USER_LIST",
    CreateUser = "CREATE_USER"
}

class ConsoleAdapter extends CDrive {
    private _user: User | null;
    private _step: Step;
    private _readLine: readline.Interface;

    constructor(props: CDriveDependencies) {
        super(props);
        this._readLine = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        this._user = null;
        this._step = Step.NotConnected;

        this.next();
    }

    private stop() {
        this._readLine.close();
    }

    private async auth(): Promise<void> {
        const question = util
            .promisify(this._readLine.question)
            .bind(this._readLine) as unknown as (sentence: string) => Promise<string>;

        const email: string = await question("Quel est votre email ?");

        this._user = await this._dependencies.userUseCase.getUserByEmail.execute({ email });
        this._step = Step.Connected;
        await this.next();
    }

    private async menu(): Promise<void> {
        const question = util
            .promisify(this._readLine.question)
            .bind(this._readLine) as unknown as (sentence: string) => Promise<string>;

        const action: string = await question("Menu ? [mes todos, utilisateurs]");
        if (action === "mes todos") {
            this._step = Step.TodoList;
            await this.next();
        } else if (action === "utilisateurs") {
            this._step = Step.UserList;
            await this.next();
        } else {
            this.actionAfterWrongAnswer();
        }
    }

    private async getTodoList(): Promise<void> {
        const todos = await this._dependencies.todoUseCase.getTodos.execute(this._user.id);
        console.log(todos);
        this._step = Step.Connected;
        this.next();
    }

    private async next(): Promise<void> {
        switch (this._step) {
            case Step.NotConnected:
                await this.auth();
                return;
            case Step.Connected:
                await this.menu();
                return;
            case Step.TodoList:
                await this.getTodoList();
                return;
            default:
                console.log("Error");
        }
    }

    private async actionAfterWrongAnswer(): Promise<void> {
        console.log("Mauvaise réponse");
        await this.next();
    }
}

export default ConsoleAdapter;
