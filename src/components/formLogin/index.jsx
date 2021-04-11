import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useUsers } from "../../providers/UserProvider";
import { useHistory } from "react-router-dom"
// import { Button } from "antd";
// import { Link } from "react-router-dom";
// import { ContainerDiv } from "./style";

import {
    StyledForm,
    StyledButton, 
    StyledParErr,
    StyledInput,
    StyledH3,
	StyledSpan,
    StyledPar,
  } from "./style";

		const schema = yup.object().shape({
			email: yup.string().email("Email inválido").required("Campo obrigatório"),
			password: yup
				.string()
				.min(6, "Mínimo de 6 dígitos")
				.required("Campo obrigatório e mínimo de 6 dígitos")
		});
		
		const FormLogin = () => {

			let history = useHistory()

			const { login } = useUsers();
			const {
				register,
				handleSubmit,
				formState: { errors },
			} = useForm({
				resolver: yupResolver(schema),
			});
			const onSubmit = (data) => {
				console.log(data);
				login(data);
			};

		const handleRegister = () => {
		  history.push("/register");
		}
	  

	return (
		<StyledForm>
			<StyledH3>Seja bem vindo!</StyledH3>
			<StyledPar>insira seus dados e faça o login</StyledPar>
			<StyledInput required {...register("email")} type="email" placeholder="email" />
			<StyledParErr>{errors.email?.message}</StyledParErr>

			<StyledInput required {...register("password")} type="password" placeholder="senha"/>
			<StyledParErr>{errors.password?.message}</StyledParErr>

			<StyledButton type="submit" onClick={handleSubmit(onSubmit)} value="Entrar"/>

			<StyledPar> ainda não tem conta? <StyledSpan onClick={handleRegister} inputColor="#EF7272"> Entre aqui! </StyledSpan></StyledPar>

		</StyledForm>
	);
};

export default FormLogin;
