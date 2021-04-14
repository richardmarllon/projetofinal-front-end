import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import moment from "moment";
import { useUsers } from "../../providers/UserProvider";
import dateToTimestamp from "../../util/convertDateToTimestamp";
import { saluteAPI } from "../../services/api";

import {
	StyledButton,
	StyledSmall,
	StyledInput,
	StyledButtonAnt,
	StyledPar,
	StyleBlockDiv,
	StyledTextarea,
	SytledHead,
	SytledContainer,
} from "./style";

import { useState, useEffect } from "react";
import SearchDisease from "../searchDisease";
import UserDiseasesList from "../userDiseasesList";

const FormAddConsultation = () => {
	const { user, loggedUser } = useUsers();
	console.log(user, "no componente", loggedUser);
	/* VER COMO SERÁ COLETADO OS DADOS DO médico / paciente     
    para o teste estou usando: 
      paciente userId = 1; 
      médico userId = 2;  
  */

	// Ainda chumbados para testes...
	// patientName = "Suellen Camargo";
	// patientId = 1;

	// const {loggedUser} = useUsers || "";
	// const {firstName, lastName, idUser, medicalSpecialty} = loggedUser.data || "";

	// const physicianName = "Alanna Ajzental"; // firstName + lastName
	// const physicianId = 2; // id
	// const specialty = "trauma surgeon"; // medicalSpecialty

	const schema = yup.object().shape({
		description: yup.string().required("Obrigatório descrição do exame!"),
		date: yup.date("Formato dia/mes/ano").required("Campo obrigatório!"),
	});

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm({
		resolver: yupResolver(schema),
	});

	const [overview, setOverview] = useState("");
	const [exams, setExams] = useState([]);
	const [canShowExams, setCanShowExams] = useState(false);
	const [appointmentId, setAppointmentId] = useState("");

	useEffect(() => {
		getAppointmentId();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const getAppointmentId = () => {
		console.log("Criando Consulta");
		const now = new Date();
		const dateAppointment = dateToTimestamp(now);

		const data = {
			userID: user.data.id,
			date: dateAppointment,
			physicianlD: loggedUser.data.id,
			physicianName: loggedUser.data.name,
			// medicalSpecialty: loggedUser.data.medicalSpecialty,
			overview: "",
		};

		saluteAPI
			.post("appointments", data)
			.then((response) => {
				console.log("Consulta criada com sucesso");

				setAppointmentId(response.data.id);
				console.log("id consulta", appointmentId);
			})
			.catch((e) => {
				window.alert(
					"Ops.. algo deu errado com CRIAR CONSULTA  \n" +
						"Verifique se está conectado e tente novamente.\n" +
						"Se persistir entre em contato com equipe de TI.",
					e
				);
			});
	};

	const onSubmit = (data) => {
		console.log("id consulta", appointmentId);
		// format date for unix stamptime
		data.date = dateToTimestamp(data.date);

		//  set other data
		data.userId = user.data.name;
		// data.physicianId = physicianId;
		data.physicianName = loggedUser.data.name;
		// data.physicianSpecialty = loggedUser.data.medicalSpecialty;
		data.examFinished = false;
		data.appointmentId = appointmentId;
		data.reportLink = null;

		// add exam and send to API
		setExams([...exams, data]);
		sendExamsToAPI(data);
	};

	const sendExamsToAPI = (data) => {
		console.log("Enviar pedido de exame", data);
		setCanShowExams(true);

		saluteAPI
			.post(`exams?userId=${user.data.id}`, data)
			.then((response) => {
				console.log("Enviado com sucesso", response);
				reset();
			})
			.catch((e) => {
				window.alert(
					"Ops.. algo deu errado com SALVAR EXAME.  \n" +
						"Verifique se está conectado e tente novamente.\n" +
						"Se persistir entre em contato com equipe de TI.",
					e
				);
			});
	};

	const backToHome = () => {
		console.log('history.push("/homePhysician");');
		// history.push("/homePhysician");
	};

	const closeConsultation = () => {
		// Save conssultation

		console.log("salvando consulta", exams.length);

		const data = {
			overview: overview,
			qtyExams: exams.length,
		};

		saluteAPI
			.patch(`appointments/${appointmentId}`, data)
			.then((response) => {
				console.log("Consulta finalizada com sucesso");
			})
			.catch((e) => {
				window.alert(
					"Ops.. algo deu errado com ATUALIZAR CONSULTA. \n" +
						"Verifique se está conectado e tente novamente.\n" +
						"Se persistir entre em contato com equipe de TI.",
					e
				);
			});
		setOverview("");
		setCanShowExams(false);
		console.log("Fechado formuláro ....");
		backToHome();
	};

	const writeOverview = (event) => {
		setOverview(event.target.value);
	};

	return (
		<SytledContainer>
			<SytledHead>Nova consulta</SytledHead>
			<StyledPar> Adicionando consulta ao paciente: {user.data.id}</StyledPar>
			<StyledPar>
				Médico(a) {loggedUser.data.name}, especialidade: "inserir depois"
			</StyledPar>

			<StyleBlockDiv>
				<StyledTextarea
					cols="50"
					rows="5"
					value={overview}
					onChange={writeOverview}
				/>
			</StyleBlockDiv>

			<StyleBlockDiv>
				<SearchDisease />
				<UserDiseasesList />
			</StyleBlockDiv>
			<StyleBlockDiv>
				<form onSubmit={handleSubmit(onSubmit)}>
					<StyledPar> Adicionar solicitação de exames:</StyledPar>
					<StyledInput
						required
						type="text"
						size="25"
						placeholder="nome do exame"
						{...register("description")}
					/>
					{errors.description && (
						<StyledSmall>{errors.description.message}</StyledSmall>
					)}

					<StyledInput
						required
						type="date"
						placeholder="dd / mm / aaaa"
						{...register("date")}
					/>
					{errors.date && <StyledSmall>{errors.date.message}</StyledSmall>}

					<StyledButton type="submit" value="adicionar" />
				</form>

				<StyledPar>Lista de exames:</StyledPar>
				{canShowExams &&
					exams.map((elm, idx) => (
						<div key={idx}>
							<StyledPar>
								{idx + 1} {elm.description} &emsp;dia:{" "}
								{moment(elm.date).format("DD/MM/YYYY")}
							</StyledPar>
						</div>
					))}
			</StyleBlockDiv>

			<StyledButtonAnt onClick={closeConsultation}>
				Salvar/Atualizar
			</StyledButtonAnt>
		</SytledContainer>
	);
};

export default FormAddConsultation;
