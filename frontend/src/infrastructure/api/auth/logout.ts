import { POST } from "../fetch";

const logout = async (): Promise<void> => {
    await POST<void, void>(`${process.env.REACT_APP_API_URL}auth/logout`);
};

export default logout;
