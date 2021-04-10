import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useUsers } from "../../providers/UserProvider";
import { Button } from "antd"
import { Link } from "react-router-dom"

const schema = yup.object().shape({
	email: yup.string().email("Email inválido").required("Campo obrigatório"),
	password: yup
		.string()
		.min(6, "Mínimo de 6 dígitos")
		.required("Campo obrigatório e mínimo de 6 dígitos"),
});

const FormLogin = () => {
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

	return (
		<form>
			<h1>Seja bem vindo!</h1>
			<p>insira seus dados e faça o login</p>
			<input {...register("email")} type="email"/>
			<p>{errors.email?.message}</p>

			<input {...register("password")} type="password"/>
			<p>{errors.password?.message}</p>

			<Button onClick={handleSubmit(onSubmit)}>Entrar</Button>
			<p>ainda não tem conta? <Link to="/register" >cadastra-se aqui!</Link></p>
		</form>
	);
};
export default FormLogin;
