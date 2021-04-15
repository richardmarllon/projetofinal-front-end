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
	BasicText,
} from "./style";
import { useState, useEffect } from "react";
import SearchDisease from "../searchDisease";
import UserDiseasesList from "../userDiseasesList";
import { Badge, Collapse } from "antd";

const FormAddConsultation = ({ setCloseModal }) => {
	const { user, loggedUser } = useUsers();
	console.log(user, "no componente", loggedUser);
	const { Panel } = Collapse;
	const [count, setCount] = useState(0);

	const schema = yup.object().shape({
		description: yup.string().required("Obrigatório descrição do exame!"),
		date: yup.date("Formato dia/mes/ano").required("Campo obrigatório!"),
	});
	console.log(user.data.exams);
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
		console.log(user.data.previousDiseases.length, "esse");
		setCount(user.data.previousDiseases.length);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [user]);

	const getAppointmentId = () => {
		// console.log("Criando Consulta");
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
				console.log(e);
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
		// console.log("Enviar pedido de exame", data);
		setCanShowExams(true);

		saluteAPI
			.post(`exams?userId=${user.data.id}`, data)
			.then((response) => {
				// console.log("Enviado com sucesso", response);
				reset();
			})
			.catch((e) => {
				console.log(e);
			});
	};

	const closeConsultation = () => {
		// Save conssultation

		const data = {
			overview: overview,
			qtyExams: exams.length,
		};

		saluteAPI
			.patch(`appointments/${appointmentId}`, data)
			.then((response) => {
				setCloseModal(true);
			})
			.catch((e) => {
				console.log(e);
			});
		setOverview("");
		setCanShowExams(false);
	};

	const writeOverview = (event) => {
		setOverview(event.target.value);
	};

	return (
		<SytledContainer>
			<SytledHead>Nova consulta</SytledHead>
			<StyledPar>
				Adicionando consulta {user.data.gender === "male" ? "ao" : "à"}{" "}
				paciente: <b>{user.data.firstName}.</b>
			</StyledPar>
			<StyledPar>
				Médic{loggedUser.data.gender === "male" ? "o" : "a"}:
				<b> {loggedUser.data.firstName}</b>, especialidade:
				<b> {loggedUser.data.medicalSpecialty}.</b>
			</StyledPar>

			<StyleBlockDiv>
				Descrição da consulta:
				<StyledTextarea
					cols="50"
					rows="3"
					placeholder={"Insira aqui um resumo da consulta."}
					value={overview}
					onChange={writeOverview}
				/>
			</StyleBlockDiv>

			<StyleBlockDiv className="colapse">
				<Collapse
					// defaultActiveKey={["1"]}
					bordered={false}
				>
					<Panel header={"Buscar e adicionar uma doença"} key="1">
						<SearchDisease />
					</Panel>
					<Panel
						header={
							<>
								<span>Exibir/editar lista de doenças do paciente</span>{" "}
								<Badge count={count} />
							</>
						}
						key="2"
					>
						<UserDiseasesList />
					</Panel>
				</Collapse>
			</StyleBlockDiv>
			<StyleBlockDiv>
				<form data-testid="formTestId" onSubmit={handleSubmit(onSubmit)}>
					<StyledPar> Adicionar solicitação de exames:</StyledPar>
					<StyledInput
						data-testid="descriptionTestId"
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
						data-testid="dateTestId"
						className="date"
						required
						type="date"
						placeholder="dd / mm / aaaa"
						{...register("date")}
					/>
					{errors.date && <StyledSmall>{errors.date.message}</StyledSmall>}

					<StyledButton type="submit" value="adicionar" />
				</form>

				{canShowExams && (
					<>
						<StyledPar>Lista de exames:</StyledPar>{" "}
						{exams.map((elm, idx) => (
							<div key={idx}>
								<StyledPar className="exam">
									<BasicText>{idx + 1} - </BasicText>
									<BasicText>
										<b>exame de:</b> {elm.description}
									</BasicText>
									<BasicText>
										<b>data:</b> {moment(elm.date).format("DD/MM/YYYY")}
									</BasicText>
								</StyledPar>
							</div>
						))}
					</>
				)}
			</StyleBlockDiv>

			<StyledButtonAnt
				onClick={() => {
					closeConsultation();
				}}
			>
				Salvar/Atualizar
			</StyledButtonAnt>
		</SytledContainer>
	);
};

export default FormAddConsultation;
