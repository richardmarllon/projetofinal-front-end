import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useUsers } from "../../providers/UserProvider";
import "antd/dist/antd.css";

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
		<form onSubmit={handleSubmit(onSubmit)}>
			<input {...register("email")} />
			<p>{errors.email?.message}</p>

			<input {...register("password")} />
			<p>{errors.password?.message}</p>

			<input value="Logar" type="submit" />
		</form>
	);
};
export default FormLogin;
