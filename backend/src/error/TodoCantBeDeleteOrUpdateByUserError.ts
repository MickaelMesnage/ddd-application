export class TodoCantBeDeleteOrUpdateByUserError extends Error {
    constructor() {
        super("TodoCantBeDeleteOrUpdateByUserError");
    }
}
