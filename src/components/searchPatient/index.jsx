import React, { useState } from "react";
import {
	CardSearch,
	Div,
	Input,
	Button,
	FormSearch,
	StyledTitle,
} from "./style";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { saluteAPI } from "../../services/api";
import { useUsers } from "../../providers/UserProvider";
import UserSearched from "../UserSearched";

const SearchPatient = () => {
	const { getUserData, user } = useUsers();
	const [submitError, setSubmitError] = useState(false);

	const schema = yup.object().shape({
		email: yup.string().email("Email inválido").required("Campo obrigatório"),
	});

	const {
		handleSubmit,
		register,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});

	const onSubmit = (data) => {
		setSubmitError(false);

		saluteAPI
			.get(`/users?email=${data.email}`)
			.then((response) => {
				getUserData(response.data[0].id);
			})
			.catch((e) => {
				setSubmitError(true);
			});
		console.log(user.data);
	};

	return (
		<>
			<CardSearch>
				<FormSearch onSubmit={handleSubmit(onSubmit)}>
					<StyledTitle>Buscar paciente:</StyledTitle>
					<Input
						required
						type="email"
						size="25"
						placeholder="Informe e-mail do paciente"
						{...register("email", { required: true })}
						onClick={() => {
							setSubmitError(false);
						}}
					/>
					<Div>{errors.email?.message}</Div>
					{submitError && <Div>Usuário não cadastrado</Div>}
					<Div className="btn">
						<Button type="submit" onClick={handleSubmit(onSubmit)}>
							Buscar
						</Button>
					</Div>
				</FormSearch>
			</CardSearch>
			{user.data && <UserSearched />}
		</>
	);
};

export default SearchPatient;
