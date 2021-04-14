import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FormLogin from "../../components/formLogin";
import { UserProvider } from "../../providers/UserProvider";
import React from "react";
import { boolean } from "yup/lib/locale";

const mockedHandleSubmit = jest.fn();
jest.mock("react-hook-form", () => {
	return {
		useForm: () => ({
			handleSubmit: mockedHandleSubmit,
			formState: {
				errors: {
					email: "mockedEmail",
					password: "mockedPassowrd",
				},
			},
			register: jest.fn(),
		}),
	};
});
jest.mock("../../providers/UserProvider", () => {
	return {
		useUsers: () => ({
			login: jest.fn(),
			formState: {
				errors: {
					email: "mockedEmail",
					password: "mockedPassowrd",
				},
			},
		}),
	};
});

describe("login", () => {
	test("When submits the form", () => {
		render(<FormLogin />);

		const userEmail = screen.getByTestId("userEmailTestId");
		const passwordInput = screen.getByTestId("passwordTestId");
		const form = screen.getByTestId("formTestId");
		userEvent.type(userEmail, "suellendavinci@gmail.com");
		userEvent.type(passwordInput, "123456");
		fireEvent.submit(form);
		expect(mockedHandleSubmit).toHaveBeenCalled();
	});
});
