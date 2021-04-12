import React, { useState } from "react";
import { CardSearch, Div, Input, Button, FormSearch } from "./style";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { saluteAPI } from "../../services/api";

const SearchPatient = () => {
	const [submitError, setSubmitError] = useState(false);
	const [patientId, setPatientId] = useState("");
	const [patientName, setPatientName] = useState("");

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
		console.log(data);
		setSubmitError(false);

		saluteAPI
			.get(`/users?email=${data.email}`)
			.then((response) => {
				setPatientId(response.data[0].id);
				setPatientName(
					`${response.data[0].firstName}  ${response.data[0].lastName}`
				);
				console.log(patientName);
				console.log(patientId);
			})
			.catch((e) => {
				setSubmitError(true);
			});
	};

	return (
		<>
			<CardSearch>
				<FormSearch onSubmit={handleSubmit(onSubmit)}>
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
					<Div>
						<Button
							type="submit"
							patientInfo={{ patientName, patientId }}
							onClick={handleSubmit(onSubmit)}
						>
							Buscar Paciente
						</Button>
					</Div>
				</FormSearch>
			</CardSearch>
		</>
	);
};

export default SearchPatient;
