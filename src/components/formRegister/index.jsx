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
} from "./style";
import { useState } from "react";
import { StyledH1 } from "../formLogin/style";
import logo from "../../images/logoMobile.svg";

const FormRegister = () => {
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
				// history.push("/");
				console.log("foi...");
				setPhysician(false);
				reset();
			})
			.catch((e) => {
				window.alert(
					"Ops.. algo deu errado! =(. \n" +
						"Por favor, confirme seus dados!\n" +
						"Provavelmente email já cadastrado.",
					e
				);
			});
	};

	const handleLogin = () => {
		console.log('history.push("/");');
		// history.push("/");
	};

	const handleUserType = (event) => {
		const option = event.target.options.selectedIndex;
		// target.options... if 0 is patient then false to show crm.
		option ? setPhysician(true) : setPhysician(false);
	};

	return (
		<>
			<StyledForm onSubmit={handleSubmit(onSubmit)}>
				<LogoContainer>
					<LogoTag src={logo} />
				</LogoContainer>
				<StyledH1>Cadastre-se</StyledH1>
				<InputContainer>
					<StyledInput
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
						required
						type="date"
						placeholder="data de nascimento"
						{...register("date")}
					/>
					{errors.date && <StyledSmall>{errors.date.message}</StyledSmall>}
				</InputContainer>
				<InputContainer>
					<StyledInput
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
				<InputContainer>
					<StyledInput
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
				<InputContainer>
					<StyledType>eu sou:</StyledType>
					<StyledSelect {...register("userType")} onChange={handleUserType}>
						<option value="patient">Paciente</option>
						<option value="physician">Médico</option>
					</StyledSelect>
				</InputContainer>
				<InputContainer>
					<StyledInput
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

				<StyledButton type="submit" />

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
