// TODO Retrieve API_KEY via GTM fairlyne.atlassian.net/browse/F1-170
import Logger from "logger";

export class HttpError extends Error {
    status: number;
    type?: string;

    constructor(status: number, body: { message: string; type: string } | null) {
        super(body?.message);

        Object.setPrototypeOf(this, HttpError.prototype);
        this.type = body?.type;
        this.status = status;
    }
}

const factory =
    (method: string) =>
    async <T, K>(url: string, data?: T): Promise<K> => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const requestOptions = {
            method: method,
            headers: myHeaders,
            credentials: "include" as RequestCredentials,
            body: JSON.stringify(data)
        };

        const response = await fetch(url, requestOptions);
        if (!response.ok) {
            const { status } = response;
            let body = null;
            try {
                body = await response.json();
            } catch (e) {
                Logger.error("Failed to parse error response body");
            }

            throw new HttpError(status, body);
        }

        return response.json();
    };

export const GET = factory("GET");
export const PATCH = factory("PATCH");
export const POST = factory("POST");
export const PUT = factory("PUT");
export const DELETE = factory("DELETE");

export default {
    GET,
    PATCH,
    POST,
    PUT,
    DELETE
};
