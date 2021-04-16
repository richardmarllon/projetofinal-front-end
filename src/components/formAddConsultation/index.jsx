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
import { useHistory } from "react-router";



const FormAddConsultation = ({ setCloseModal }) => {
	const { user, loggedUser } = useUsers();	
	const { Panel } = Collapse;
	const [count, setCount] = useState(0);

	const now = new Date();
	const dateAppointment = dateToTimestamp(now);
	const history = useHistory();


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
	const [finished, setFinished] = useState(false);


	useEffect(() => {
		getAppointmentId();
		let previous = user.data.previousDiseases?.length; 
		setCount(previous);		
		
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [user]);


	useEffect(() => {
		if (finished) {
			history.push("/");
		}
		setFinished(false);		

	// eslint-disable-next-line react-hooks/exhaustive-deps
	},[canShowExams])

	// When component is open a new appointment is created to get its id.
	const getAppointmentId = () => {
	
			saluteAPI
			.post("appointments", {})
			.then((response) => {				
				setAppointmentId(response.data.id);
				console.log("id consulta", appointmentId);
			})
			.catch((e) => {
				console.log('ops algo deu errado ao criar a consuta!',e);
			});
	};

	const onSubmit = (data) => {
		
		// format date for unix stamptime
		data.date = dateToTimestamp(data.date);

		//  set other data
		data.userId = user.data.firstName;
		data.physicianId = loggedUser.data.id;
		data.physicianName = loggedUser.data.firstName;
		data.physicianSpecialty = loggedUser.data.medicalSpecialty;
		data.examFinished = false;
		data.appointmentId = appointmentId;
		data.reportLink = null;

		// add exam and send to API
		setExams([...exams, data]);
		sendExamsToAPI(data);
	};

	const sendExamsToAPI = (data) => {
		
		setCanShowExams(true);

		saluteAPI
			.post(`exams?userId=${user.data.id}`, data)
			.then((response) => {				
				reset();
			})
			.catch((e) => {
				console.log("ixe, deu erro ao enviar a consulta!",e);
			});
	};


	const closeConsultation = () => {
		// Save conssultation
		
		const data = {
			userID: user.data.id,
			date: dateAppointment,
			physicianlD: loggedUser.data.id,
			physicianName: loggedUser.data.name,
			medicalSpecialty: loggedUser.data.medicalSpecialty,
			overview: overview,
			qtyExams: exams.length,
		};		

		saluteAPI
			.patch(`appointments/${appointmentId}`, data)
			.then((response) => {
				setOverview("");
				setCanShowExams(false);
				
			})
			.catch((e) => {
				console.log('aff... deu erro ao atualizar a consulta!',e);

			});

		setFinished(true);
		
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
						min = { moment(now).format("YYYY-MM-DD")}						
						placeholder="dd/mm/aaaa"
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
