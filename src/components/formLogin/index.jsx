import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useUsers } from "../../providers/UserProvider";
import { useHistory } from "react-router-dom";
import logo from "../../images/logoMobile.svg";

import {
	StyledForm,
	StyledButton,
	StyledParErr,
	StyledInput,
	StyledH1,
	StyledSpan,
	StyledPar,
	LogoTag,
	LogoContainer,
	InputContainer,
} from "./style";

const schema = yup.object().shape({
	email: yup.string().email("Email inválido").required("Campo obrigatório"),
	password: yup
		.string()
		.min(6, "Mínimo de 6 dígitos")
		.required("Campo obrigatório e mínimo de 6 dígitos"),
});

const FormLogin = () => {
	let history = useHistory();
	const { submitError } = useUsers();
	const { login } = useUsers();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});

	const onSubmit = (data) => {
		login(data);
	};

	const handleRegister = () => {
		history.push("/register");
	};

	return (
		<>
			<StyledForm data-testid="formTestId">
				<LogoContainer>
					<LogoTag src={logo} />
				</LogoContainer>
				<StyledH1>Seja-bem vindo&#40;a&#41;!</StyledH1>
				<StyledPar>Insira seus dados e faça o login</StyledPar>
				<InputContainer>
					<StyledInput
						data-testid="userEmailTestId"
						required
						{...register("email")}
						type="email"
						placeholder="email"
					/>
					<StyledParErr>{errors.email?.message}</StyledParErr>
				</InputContainer>
				<InputContainer>
					<StyledInput
						data-testid="passwordTestId"
						required
						{...register("password")}
						type="password"
						placeholder="senha"
					/>
					<StyledParErr>{errors.password?.message}</StyledParErr>
				</InputContainer>
				{submitError && <StyledParErr>E-mail ou senha incorretos</StyledParErr>}
				<StyledButton
					type="submit"
					onClick={handleSubmit(onSubmit)}
					value="Entrar"
				/>
				<StyledPar>
					Ainda não tem conta?
					<StyledSpan onClick={handleRegister} inputColor="#EF7272">
						{" "}
						Cadastre-se aqui!
					</StyledSpan>
				</StyledPar>
			</StyledForm>
		</>
	);
};

export default FormLogin;
