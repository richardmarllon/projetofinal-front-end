import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useUsers } from "../../providers/UserProvider";
import formatCPF from "../../util/formartCPF";
import dateToTimestamp from "../../util/convertDateToTimestamp";
import { saluteAPI } from "../../services/api";
import { useEffect, useState } from "react";
import logo from "../../images/logoMobile.svg";
import validatePhone from "../../util/validatePhone";

import {
	StyledForm,
	StyledButton,
	StyledSmall,
	StyledType,
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
import { useHistory } from "react-router";

const FormUserUpdateInfo = () => {
	const { loggedUser, getLoggedUserData } = useUsers();

	useEffect(() => {
		if (loggedUser.data.bloodType) {
			if (history.location.pathname === "/finishRegister") {
				history.push("/");
			} else {
				handleClose();
			}
		}
	}, [loggedUser]);

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

	const [inputUser, setInputUser] = useState({
		firstName: firstName,
		lastName: lastName,
		birthDate: birthDate,
		gender,
		pregnant,
		cpf,
		crm,
		medicalSpecialty,
		allergies,
		bloodType: bloodType + rhFactor,
		address,
		cellphoneNumber,
	});

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
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});

	const isPhysician = userType === "physician" ? true : false;

	const [isWoman, setIsWoman] = useState(true);
	const [isCpfError, setIsCpfError] = useState(false);
	const [specialtyError, setSpecialtyError] = useState(false);
	const [bloodError, setBloodError] = useState(false);
	const [phoneError, setPhoneError] = useState(false);
	const [buttonMsg, setButtonMsg] = useState("Salvar e Atualizar");

	// format data to be send
	const onSubmit = (data) => {
		setButtonMsg("Analizando ...");
		// format cpf
		const _cpf = formatCPF(data.cpf);
		if (!_cpf) {
			setIsCpfError(true);
			return;
		}
		data.cpf = _cpf;

		// checking phone
		if (!validatePhone(data.cellphoneNumber)) {
			setPhoneError(true);
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

		// handler pragnant to false or true
		data.pregnant === "true" ? (data.pregnant = true) : (data.pregnant = false);

		// handler input bloodType separates type and rhfactor
		data.rhFactor = data.bloodType.slice(-1);
		data.bloodType.length < 3
			? (data.bloodType = data.bloodType.slice(0, 1))
			: (data.bloodType = data.bloodType.slice(0, 2));

		// format date for milliseconds
		data.birthDate = dateToTimestamp(data.birthDate);

		setButtonMsg("Enviando ...");
		setUserRegister(data);
	};
	const history = useHistory();
	const setUserRegister = (data) => {
		saluteAPI
			.patch(`/users/${id}`, data)
			.then((response) => {
				setButtonMsg("Atualizado.");
				getLoggedUserData(id);
				// setTimeout(handleClose(), 1000);
			})
			.catch((e) => {
				console.log("ocorreu um erro: ", e);
			});
	};

	// Closing the Modal
	const handleClose = () => {
		setButtonMsg("Salvar e Atualizar");
		// console.log("FECHANDO MODAL...");
		// provavelente um setShowModal(false)
	};

	const handleUserGender = (event) => {
		const option = event.target.options.selectedIndex;

		// target.options... if 0 is female then show pregnant fied.
		!option ? setIsWoman(true) : setIsWoman(false);
		setInputUser([inputUser.gender, event.target.value]);
	};

	const handleBlood = (event) => {
		// setBloodError is disable, because the user is typing.
		setBloodError(false);
		setInputUser([inputUser.gender, event.target.value]);
	};

	const handleCpf = (event) => {
		// setIsCpfError is disable, because the user is typing.
		setIsCpfError(false);
		setInputUser([inputUser.gender, event.target.value]);
	};

	const handlePhone = (event) => {
		setInputUser([inputUser.cellphoneNumber, event.target.value]);
		setPhoneError(false);
		// console.log("editando phone", setPhoneError);
	};

	return (
		<>
			<StyledForm onSubmit={handleSubmit(onSubmit)}>
				<LogoContainer>
					<LogoTag src={logo} />
				</LogoContainer>
				{/* <ContentContainer> */}
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
						{isCpfError && (
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
								id="gender"
								{...register("gender")}
								value={inputUser.gender}
								onChange={handleUserGender}
							>
								<option value="female">Mulher</option>
								<option value="male">Homem</option>
							</StyledSelect>
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
				{/* </ContentContainer> */}
			</StyledForm>
		</>
	);
};

export default FormUserUpdateInfo;
