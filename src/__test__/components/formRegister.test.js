import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FormRegister from "../../components/formRegister";
import React from "react";

const mockedHandleSubmit = jest.fn();
jest.mock("react-hook-form", () => {
	return {
		useForm: () => ({
			handleSubmit: mockedHandleSubmit,
			formState: {
				errors: {
					email: "mockedEmail",
					firstName: "mockedFirstName",
					lastName: "mockedLastName",
					date: "mockedDate",
					password: "mockedPassowrd",
					userType: "mockedUserType",
					cpf: "mockedCpf",
				},
			},
			register: jest.fn(),
		}),
	};
});

describe("Should call handleSubmit", () => {
	test("When submits the form REGISTER", () => {
		render(<FormRegister />);

		const userEmail = screen.getByTestId("userEmailTestId");
		const passwordInput = screen.getByTestId("passwordTestId");
		const firstNameInput = screen.getByTestId("firstNameTestId");
		const lastNameInput = screen.getByTestId("lastNameTestId");
		const dateInput = screen.getByTestId("dateTestId");
		const userTypeInput = screen.getByTestId("userTypeTestId");
		const cpfInput = screen.getByTestId("cpfTestId");

		const form = screen.getByTestId("formTestId");
		userEvent.type(userEmail, "suellendavinci@gmail.com");
		userEvent.type(passwordInput, "123456");
		userEvent.type(firstNameInput, "suellen");
		userEvent.type(lastNameInput, "camargo");
		userEvent.type(dateInput, 958532400000);
		userEvent.type(userTypeInput, "patient");
		userEvent.type(cpfInput, "12545378996");
		fireEvent.submit(form);
		expect(mockedHandleSubmit).toHaveBeenCalled();
	});
});
