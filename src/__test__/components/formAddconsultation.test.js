import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FormAddConsultation from "../../components/formAddConsultation";
import React from "react";

const mockedHandleSubmit = jest.fn();
jest.mock("react-hook-form", () => {
	return {
		useForm: () => ({
			handleSubmit: mockedHandleSubmit,
			formState: {
				errors: {
					userID: "mockeduserID",
					date: "mockedDate",
					physicianlD: "mockedphysicianlD",
					physicianName: "physicianName",
					overview: "mockedoverview",
					description: "mockeddescription",
					exams: "mockedExams",
				},
			},
			register: jest.fn(),
		}),
	};
});
jest.mock("../../providers/UserProvider", () => {
	return {
		useUsers: () => ({
			loggedUser: {
				data: {},
			},
			user: {
				data: {
					firstName: "Mocked",
					lastName: "Mocked",
					birthDate: "Mocked",
					userType: "Mocked",
					cpf: "Mocked",
					previousDiseases: "Mocked",
					crm: "Mocked",
					id: "Mocked",
					gender: "Mocked",
					pregnant: "Mocked",
					medicalSpecialty: "Mocked",
					allergies: "Mocked",
					bloodType: "Mocked",
					address: "Mocked",
					cellphoneNumber: "Mocked",
					rhFactor: "Mocked",
				},
			},
			formState: {
				errors: {
					userID: "mockeduserID",
					date: "mockedDate",
					physicianlD: "mockedphysicianlD",
					physicianName: "physicianName",
					overview: "mockedoverview",
					description: "mockeddescription",
					exams: "mockedExams",
				},
			},
		}),
	};
});

describe("Should call handleSubmit", () => {
	test("When submits the form FormAddConsultation", () => {
		render(<FormAddConsultation />);

		const date = screen.getByTestId("dateTestId");
		const description = screen.getByTestId("descriptionTestId");
		const form = screen.getByTestId("formTestId");
		userEvent.type(date, "28/04/1998");
		userEvent.type(description, "Teste teste teste descrição de teste");
		fireEvent.submit(form);
		expect(mockedHandleSubmit).toHaveBeenCalled();
	});
});
