import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FormUserUpdateInfo from "../../components/formUserUpdateInfo";
import React from "react";

const mockedHandleSubmit = jest.fn();
jest.mock("react-hook-form", () => {
	return {
		useForm: () => ({
			handleSubmit: mockedHandleSubmit,
			formState: {
				errors: {
					firstName: "mockedFirstName",
					lastName: "mockedLastName",
					birthDate: "mockedBirthDate",
					gender: "mockedGender",
					pregnant: "mockedPregnant",
					cpf: "mockedCpf",
					crm: "mockedCrm",
					medicalSpecialty: "mockedMedicalSpecialty",
					allergies: "mockedAllergies",
					bloodType: "mockedBloodType",
					address: "mockedAddress",
					cellphoneNumber: "mockedCellphoneNumber",
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
			formState: {
				errors: {
					firstName: "mockedFirstName",
					lastName: "mockedLastName",
					birthDate: "mockedBirthDate",
					gender: "mockedGender",
					pregnant: "mockedPregnant",
					cpf: "mockedCpf",
					crm: "mockedCrm",
					medicalSpecialty: "mockedMedicalSpecialty",
					allergies: "mockedAllergies",
					bloodType: "mockedBloodType",
					address: "mockedAddress",
					cellphoneNumber: "mockedCellphoneNumber",
				},
			},
		}),
	};
});

describe("Should call handleSubmit", () => {
	test("When submits the form FormUserUpdateInfo", () => {
		render(<FormUserUpdateInfo />);

		const firstName = screen.getByTestId("firstNameTestId");
		const lastName = screen.getByTestId("lastNameTestId");
		const birthDate = screen.getByTestId("birthDateTestId");
		const gender = screen.getByTestId("genderTestId");
		const cpf = screen.getByTestId("cpfTestId");
		const allergies = screen.getByTestId("allergiesTestId");
		const bloodType = screen.getByTestId("bloodTypeTestId");
		const address = screen.getByTestId("addressTestId");
		const cellphoneNumber = screen.getByTestId("cellphoneNumberTestId");
		const form = screen.getByTestId("formTestId");

		userEvent.type(firstName, "teste");
		userEvent.type(lastName, "teste");
		userEvent.type(birthDate, "teste");
		userEvent.type(gender, "teste");
		userEvent.type(cpf, "12345678998");
		userEvent.type(allergies, "teste");
		userEvent.type(bloodType, "A+");
		userEvent.type(address, "teste,teste");
		userEvent.type(cellphoneNumber, 123456789987);
		fireEvent.submit(form);
		expect(mockedHandleSubmit).toHaveBeenCalled();
	});
});
