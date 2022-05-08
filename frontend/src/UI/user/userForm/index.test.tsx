import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import UserForm from ".";

test("test1", () => {
    const mockSubmit = jest.fn();
    render(<UserForm onUserSubmit={mockSubmit} />);
    const loginInput = screen.getByRole("textbox", { name: /Login/i });
    fireEvent.change(loginInput, { target: { value: "aaa" } });

    const submitButton = screen.getByText("Créer");
    fireEvent.click(submitButton);
    expect(mockSubmit.mock.calls.length).toBe(0);

    const errorDiv = screen.getByText("Erreur");
    expect(errorDiv).toBeInTheDocument();

    fireEvent.change(loginInput, { target: { value: "aa@aaa.aa" } });
    // errorDiv = screen.getByText("Erreur");

    expect(errorDiv).not.toBeInTheDocument();
});

// test("test1", () => {
//     const mockSubmit = jest.fn();
//     render(<UserForm onUserSubmit={mockSubmit} />);
//     const loginInput = screen.getByRole("textbox", { name: /Login/i });
//     fireEvent.change(loginInput, { target: { value: "aaa" } });
//     const submitButton = screen.getByText("Créer");
//     fireEvent.click(submitButton);

//     expect(mockSubmit.mock.calls.length).toBe(0);
// });

// test("test1", () => {
//     const mockSubmit = jest.fn();
//     render(<UserForm onUserSubmit={mockSubmit} />);
//     const loginInput = screen.getByRole("textbox", { name: /Login/i });
//     fireEvent.change(loginInput, { target: { value: "adaa" } });
//     const submitButton = screen.getByText("Créer");
//     fireEvent.click(submitButton);

//     expect(mockSubmit.mock.calls.length).toBe(1);
// });
