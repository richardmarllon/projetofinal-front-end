import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import formatCPF from "../../util/formartCPF";
import dateToTimestamp from "../../util/convertDateToTimestamp";
import { saluteAPI } from "../../services/api";
import {
	StyledForm,
	StyledButton,
	StyledSmall,
	StyledType,
	StyledInput,
	StyledSelect,
	StyledPar,
	StyledSpan,
	InputContainer,
	LogoContainer,
	LogoTag,
	StyledLabel,
	StyledH1,
	SendBtnContainer,
} from "./style";
import { useState } from "react";
import logo from "../../images/logoMobile.svg";
import { useHistory } from "react-router";

const FormRegister = () => {
	const history = useHistory();
	const schema = yup.object().shape({
		email: yup.string().email("Email inválido").required("Campo obrigatório"),
		firstName: yup.string().required("Campo obrigatório"),
		lastName: yup.string().required("Campo obrigatório"),
		date: yup.date("Formato dia/mes/ano").required("Campo obrigatório"),
		password: yup
			.string()
			.min(6, "Mínimo de 6 dígitos!")
			.required("Campo obrigatório, 6 dígitos!"),
		userType: yup.string().required("Campo obrigatório!"),
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
		reset,
	} = useForm({
		resolver: yupResolver(schema),
	});

	const [isPhysician, setPhysician] = useState(false);

	const onSubmit = (data) => {
		// format cpf
		const _cpf = formatCPF(data.cpf);
		if (!_cpf) {
			window.alert("CPF com erro, favor revisar!");
			return;
		}
		data.cpf = _cpf;

		// format date for unix stamptime
		let birthDate = dateToTimestamp(data.date);
		data = { ...data, birthDate };

		//finally data readdle to post =)
		const { firstName, lastName, password, userType, email, cpf, crm } = data;
		const sendData = {
			firstName,
			lastName,
			birthDate,
			password,
			email,
			userType,
			cpf,
			crm,
		};
		setUserRegister(sendData);
	};

	const setUserRegister = (data) => {
		saluteAPI
			.post(`/users`, data)
			.then((response) => {
				history.push("/");
				setPhysician(false);
				reset();
			})
			.catch((e) => {
				console.log("ocorreu um erro: ", e);
			});
	};

	const handleLogin = () => {
		history.push("/");
	};

	const handleUserType = (event) => {
		const option = event.target.options.selectedIndex;
		// target.options... if 0 is patient then false to show crm.
		option ? setPhysician(true) : setPhysician(false);
	};

	return (
		<>
			<StyledForm data-testid="formTestId" onSubmit={handleSubmit(onSubmit)}>
				<LogoContainer>
					<LogoTag src={logo} />
				</LogoContainer>
				<StyledH1>Cadastre-se</StyledH1>
				<InputContainer>
					<StyledInput
						data-testid="firstNameTestId"
						required
						type="text"
						size="25"
						placeholder="Primeiro nome"
						{...register("firstName")}
					/>
					{errors.firstName && (
						<StyledSmall>{errors.firstName.message}</StyledSmall>
					)}
				</InputContainer>
				<InputContainer>
					<StyledInput
						data-testid="lastNameTestId"
						required
						type="text"
						size="25"
						placeholder="Último nome"
						{...register("lastName")}
					/>
					{errors.lastName && (
						<StyledSmall>{errors.lastName.message}</StyledSmall>
					)}
				</InputContainer>
				<InputContainer className="date">
					<StyledLabel>Data de nascimento:</StyledLabel>
					<StyledInput
						data-testid="dateTestId"
						required
						type="date"
						placeholder="data de nascimento"
						{...register("date")}
					/>
					{errors.date && <StyledSmall>{errors.date.message}</StyledSmall>}
				</InputContainer>
				<InputContainer className="password">
					<StyledInput
						data-testid="passwordTestId"
						required
						type="password"
						size="25"
						placeholder="Senha mínimo 6 digitos"
						{...register("password", { required: true })}
					/>
					{errors.password && (
						<StyledSmall>{errors.password.message}</StyledSmall>
					)}
				</InputContainer>
				<InputContainer className="email">
					<StyledInput
						data-testid="userEmailTestId"
						required
						type="email"
						size="25"
						placeholder="email"
						{...register("email", { required: true })}
					/>
					{errors.email && (
						<StyledSmall inputColor="#EF7272">
							{errors.email.message}
						</StyledSmall>
					)}
				</InputContainer>
				<InputContainer className="type">
					<StyledType>eu sou:</StyledType>
					<StyledSelect
						data-testid="userTypeTestId"
						{...register("userType")}
						onChange={handleUserType}
					>
						<option value="patient">Paciente</option>
						<option value="physician">Médico</option>
					</StyledSelect>
				</InputContainer>
				<InputContainer className={!isPhysician && "personal"}>
					<StyledInput
						data-testid="cpfTestId"
						required
						type="text"
						size="25"
						placeholder="CPF"
						{...register("cpf")}
					/>
					{errors.cpf && <StyledSmall>{errors.cpf.message}</StyledSmall>}
				</InputContainer>

				{isPhysician && (
					<InputContainer>
						<StyledInput
							required
							type="text"
							size="25"
							placeholder="CRM"
							{...register("crm")}
						/>
						{errors.crm && <StyledSmall>{errors.crm.message}</StyledSmall>}
					</InputContainer>
				)}
				<SendBtnContainer>
					<StyledButton type="submit" />
				</SendBtnContainer>

				<StyledPar>
					{" "}
					Já tem conta?{" "}
					<StyledSpan onClick={handleLogin} inputColor="#EF7272">
						{" "}
						Entre aqui!{" "}
					</StyledSpan>
				</StyledPar>
			</StyledForm>
		</>
	);
};

export default FormRegister;
