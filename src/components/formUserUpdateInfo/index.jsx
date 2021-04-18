import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useUsers } from "../../providers/UserProvider";
import formatCPF from "../../util/formartCPF";
import dateToTimestamp from "../../util/convertDateToTimestamp";
import { saluteAPI } from "../../services/api";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import logo from "../../images/logoMobile.svg";
import validatePhone from "../../util/validatePhone";
import moment from "moment";

import {
	StyledForm,
	StyledButton,
	StyledSmall,
	StyledInput,
	StyledSelect,
	InputContainer,
	LogoContainer,
	LogoTag,
	StyledLabel,
	StyledH1,
	SendBtnContainer,
	ContentContainer,
	SectionContainer,
	StyledLabelForm,
} from "../formUserUpdateInfo/style";

const FormUserUpdateInfo = ({ setCloseModal, openModal }) => {
	const { loggedUser, getLoggedUserData } = useUsers();
	const history = useHistory();
	const [finished, setFinished] = useState(false);

	useEffect(() => {
		setButtonMsg("Salvar e Atualizar");
		if (finished) {
			history.push("/");
		}
		setFinished(false);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [loggedUser]);

	const schema = yup.object().shape({
		firstName: yup.string().required("Campo obrigatório"),
		lastName: yup.string().required("Campo obrigatório"),
		birthDate: yup.date("Formato dia/mes/ano").required("Campo obrigatório"),
		cpf: yup
			.string()
			.min(11, "CPF com erro!")
			.max(14, "CPF com erro!")
			.required("Campo obrigatório!"),
	});

	const {
		firstName,
		lastName,
		birthDate,
		gender,
		pregnant,
		userType,
		cpf,
		crm,
		medicalSpecialty,
		allergies,
		bloodType,
		rhFactor,
		id,
		address,
		cellphoneNumber,
	} = loggedUser.data || "";

	const birth = moment(Number(birthDate)).format("YYYY-MM-DD");

	const [inputUser, setInputUser] = useState({
		firstName: firstName,
		lastName: lastName,
		birthDate: birth,
		gender: gender,
		pregnant: pregnant,
		cpf,
		crm,
		medicalSpecialty,
		allergies,
		bloodType: bloodType + rhFactor,
		address,
		cellphoneNumber,
	});

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});

	const isPhysician = userType === "physician" ? true : false;

	const [isWoman, setIsWoman] = useState(gender === "female");
	const [cpfError, setCpfError] = useState(false);
	const [specialtyError, setSpecialtyError] = useState(false);
	const [bloodError, setBloodError] = useState(false);
	const [phoneError, setPhoneError] = useState(false);
	const [genderError, setGenderError] = useState(false);
	const [buttonMsg, setButtonMsg] = useState("Salvar e Atualizar");

	const onSubmit = (data) => {
		
		// format cpf
		const _cpf = formatCPF(data.cpf);
		if (!_cpf) {
			setCpfError(true);
			return;
		}
		data.cpf = _cpf;

		// checking phone
		if (!validatePhone(data.cellphoneNumber)) {
			setPhoneError(true);
			return;
		}

		if (data.gender === "empty") {
			setGenderError(true);
			return;
		}

		if (isPhysician && !data.medicalSpecialty) {
			setSpecialtyError(true);
		}

		// check if bloodType was selected error message
		if (data.bloodType === "empty") {
			setBloodError(true);
			return;
		} else {
			setBloodError(false);
		}

		setButtonMsg("Analizando ...");
		// handler pragnant to false or true
		data.pregnant === "true" ? (data.pregnant = true) : (data.pregnant = false);

		// handler input bloodType separates type and rhfactor
		data.rhFactor = data.bloodType.slice(-1);
		data.bloodType.length < 3
			? (data.bloodType = data.bloodType.slice(0, 1))
			: (data.bloodType = data.bloodType.slice(0, 2));

		// format date for milliseconds
		data.birthDate = dateToTimestamp(data.birthDate);
		setUserRegister(data);
	};

	
	const setUserRegister = (data) => {
		setButtonMsg("Enviando ...");
		saluteAPI
			.patch(`/users/${id}`, data)
			.then((response) => {
				setButtonMsg("Atualizado.");
				getLoggedUserData(id);
				setFinished(true);
			})
			.catch((e) => {
				console.log("ocorreu um erro: ", e);
			});
	};

	const handleUserGender = (event) => {
		const option = event.target.value;

		// target.options... if 0 is female then show pregnant fied.
		console.log("option", option);
		option === "female" ? setIsWoman(true) : setIsWoman(false);
		setInputUser([inputUser.gender, event.target.value]);

		// setGenderError is disable, because the user is typing.
		setGenderError(false);
	};

	const handleBlood = (event) => {
		// setBloodError is disable, because the user is typing.
		setBloodError(false);
		setInputUser([inputUser.bloodType, event.target.value]);
	};

	const handleCpf = (event) => {
		// setIsCpfError is disable, because the user is typing.
		setCpfError(false);
		setInputUser([inputUser.cpf, event.target.value]);
	};

	const handlePhone = (event) => {
		// setPhoneError is disable, because the user is typing.
		setPhoneError(false);
		setInputUser([inputUser.cellphoneNumber, event.target.value]);
	};

	return (
		<>
			<StyledForm
				data-testid="formTestId"
				onSubmit={handleSubmit(onSubmit)}
				type={history?.location.pathname === "/home" ? "modal" : "page"}
			>
				<LogoContainer>
					<LogoTag src={logo} />
				</LogoContainer>
				{loggedUser.data.bloodType ? (
					<StyledH1>Atualizar Perfil</StyledH1>
				) : (
					<StyledH1>Finalize seu cadastro</StyledH1>
				)}
				<StyledLabel>Dados pessoais</StyledLabel>
				<SectionContainer className="personal">
					<InputContainer>
						<StyledLabelForm for="name">primeiro nome:</StyledLabelForm>
						<StyledInput
							data-testid="firstNameTestId"
							id="name"
							required
							type="text"
							value={inputUser.firstName}
							placeholder="Primeiro nome"
							{...register("firstName")}
							onChange={(event) =>
								setInputUser([inputUser.firstName, event.target.value])
							}
						/>
						{errors.firstName && (
							<StyledSmall>{errors.firstName.message}</StyledSmall>
						)}
					</InputContainer>

					<InputContainer>
						<StyledLabelForm for="lastName">último nome:</StyledLabelForm>
						<StyledInput
							data-testid="lastNameTestId"
							id="lastName"
							required
							type="text"
							value={inputUser.lastName}
							placeholder="Último nome"
							{...register("lastName")}
							onChange={(event) =>
								setInputUser([inputUser.lastName, event.target.value])
							}
						/>
						{errors.lastName && (
							<StyledSmall>{errors.lastName.message}</StyledSmall>
						)}
					</InputContainer>

					<InputContainer className="date">
						<StyledLabelForm for="birth">Data de nascimento:</StyledLabelForm>
						<StyledInput
							data-testid="birthDateTestId"
							required
							id="birth"
							type="date"
							value={inputUser.birthDate}
							placeholder="data de nascimento"
							{...register("birthDate")}
							onChange={(event) =>
								setInputUser([inputUser.birthDate, event.target.value])
							}
						/>
						{errors.birthDate && (
							<StyledSmall>{errors.birthDate.message}</StyledSmall>
						)}
					</InputContainer>
					<InputContainer className={!isPhysician && "personal"}>
						<StyledLabelForm for="cpf">CPF:</StyledLabelForm>
						<StyledInput
							data-testid="cpfTestId"
							id="cpf"
							className="cpf"
							required
							type="text"
							placeholder="CPF"
							value={inputUser.cpf}
							{...register("cpf")}
							onChange={handleCpf}
						/>
						{errors.cpf && <StyledSmall>{errors.cpf.message}</StyledSmall>}
						{cpfError && (
							<StyledSmall>CPF com erro, favor revisar!</StyledSmall>
						)}
					</InputContainer>
					{isPhysician && (
						<>
							<InputContainer>
								<StyledLabelForm for="crm">CRM:</StyledLabelForm>
								<StyledInput
									id="crm"
									required
									type="text"
									placeholder="CRM"
									value={inputUser.crm}
									{...register("crm")}
									onChange={(event) =>
										setInputUser([inputUser.crm, event.target.value])
									}
								/>
								{errors.crm && <StyledSmall>{errors.crm.message}</StyledSmall>}
							</InputContainer>

							<InputContainer>
								<StyledLabelForm for="specialty">
									especialidade:
								</StyledLabelForm>
								<StyledInput
									id="specialty"
									required
									type="text"
									placeholder="Especialidade"
									value={inputUser.medicalSpecialty}
									{...register("medicalSpecialty")}
									onChange={(event) =>
										setInputUser([
											inputUser.medicalSpecialty,
											event.target.value,
										])
									}
								/>
								{errors.medicalSpecialty && (
									<StyledSmall>{errors.medicalSpecialty.message}</StyledSmall>
								)}
								{specialtyError && (
									<StyledSmall>
										Obrigatório preencher especialidade!
									</StyledSmall>
								)}
							</InputContainer>
						</>
					)}

					<InputContainer>
						<StyledLabelForm for="address">endereço:</StyledLabelForm>
						<StyledInput
							data-testid="addressTestId"
							id="address"
							required
							type="text"
							value={inputUser.address}
							placeholder="Ex: Av. Brasil, 985 - Maringá - PR"
							{...register("address")}
							onChange={(event) =>
								setInputUser([inputUser.address, event.target.value])
							}
						/>
						{errors.address && (
							<StyledSmall>{errors.address.message}</StyledSmall>
						)}
					</InputContainer>
					<InputContainer>
						<StyledLabelForm for="phone">telefone:</StyledLabelForm>
						<StyledInput
							data-testid="cellphoneNumberTestId"
							id="phone"
							required
							type="text"
							placeholder="Ex: 11999851452"
							value={inputUser.cellphoneNumber}
							{...register("cellphoneNumber")}
							onChange={handlePhone}
						/>
						{errors.cellphoneNumber && (
							<StyledSmall>{errors.cellphoneNumber.message}</StyledSmall>
						)}
						{phoneError && (
							<StyledSmall>Telefone digitado com erro!</StyledSmall>
						)}
					</InputContainer>
				</SectionContainer>
				<StyledLabel>Dados de saúde</StyledLabel>
				<SectionContainer className="health">
					<InputContainer>
						<StyledLabelForm for="allergies">alergias:</StyledLabelForm>
						<StyledInput
							data-testid="allergiesTestId"
							id="allergies"
							type="text"
							placeholder="Ex: lactose, glúten, etc."
							value={inputUser.allergies}
							{...register("allergies")}
							onChange={(event) =>
								setInputUser([inputUser.allergies, event.target.value])
							}
						/>
					</InputContainer>
					<InputContainer className="bloodType">
						<StyledLabelForm for="blood">tipo sanguíneo:</StyledLabelForm>
						<StyledSelect
							data-testid="bloodTypeTestId"
							id="blood"
							value={inputUser.bloodType}
							{...register("bloodType")}
							onChange={handleBlood}
						>
							<option value="empty">Selecione</option>
							<option value="A-">A-</option>
							<option value="A+">A+</option>
							<option value="AB-">AB-</option>
							<option value="AB+">AB+</option>
							<option value="B-">B-</option>
							<option value="B+">B+</option>
							<option value="O-">O-</option>
							<option value="O+">O+</option>
						</StyledSelect>
						{bloodError && (
							<StyledSmall>Favor escolher tipo sanguíneo !</StyledSmall>
						)}
					</InputContainer>
					<ContentContainer>
						<InputContainer className="type">
							<StyledLabelForm for="gender">gênero:</StyledLabelForm>
							<StyledSelect
								data-testid="genderTestId"
								id="gender"
								{...register("gender")}
								value={inputUser.gender}
								onChange={handleUserGender}
							>
								<option value="empty">Selecionar</option>
								<option value="female">Mulher</option>
								<option value="male">Homem</option>
							</StyledSelect>
							{genderError && <StyledSmall>Escolha obrigatória!</StyledSmall>}
						</InputContainer>

						{isWoman && (
							<InputContainer className="woman type">
								<StyledLabelForm for="pregnant">está grávida:</StyledLabelForm>
								<StyledSelect
									id="pregnant"
									value={inputUser.pregnant}
									{...register("pregnant")}
									onChange={(event) =>
										setInputUser([inputUser.pregnant, event.target.value])
									}
								>
									<option value={false}>Não</option>
									<option value={true}>Sim</option>
								</StyledSelect>
							</InputContainer>
						)}
					</ContentContainer>
				</SectionContainer>

				<SendBtnContainer>
					<StyledButton type="submit" value={buttonMsg} />
				</SendBtnContainer>
			</StyledForm>
		</>
	);
};

export default FormUserUpdateInfo;
