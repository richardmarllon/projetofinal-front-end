/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from "react";
import { useAppointments } from "../../providers/AppointmentsProvider";
import "antd/dist/antd.css";
import {
	SytledContainer,
	SytledCardOverview,
	SytledEnvelop,
	SytledCardInitial,
	SytledTitle,
	SytledTitle2,
	ModalButton,
	StyledPagination,
	StyledArrow,
} from "./style";
import moment from "moment";
import PatientCardHistory from "../patientCardHistory";
import { useEffect } from "react";
import { useUsers } from "../../providers/UserProvider";

const ListPatientHistory = ({ handleClickHistoric }) => {
	const { userAppointments, getAppointmentsUser } = useAppointments();
	const { user } = useUsers();
	const [isModalVisible, setIsModalVisible] = useState(false);
	const [closeModal, setCloseModal] = useState(false);
	const [minValue, setMinValue] = useState(0);
	const [maxValue, setMaxValue] = useState(4);
	const numEachPage = 4;

	console.log("userAppointments", userAppointments);
	// console.log("examsAppointment", examsAppointment);

	const calcDate = (date) => {
		date = moment(Number(date)).format("DD/MM/YYYY");

		return date;
	};

	const handleChange = (value) => {
		setMinValue((value - 1) * numEachPage);
		setMaxValue(value * numEachPage);
	};
	useEffect(() => {
		getAppointmentsUser(user.data.id);
	}, [user]);

	return (
		<>
			<StyledArrow
				onClick={() => {
					handleClickHistoric();
				}}
			/>
			<SytledContainer>
				<SytledTitle>Histórico</SytledTitle>
				<SytledEnvelop>
					{userAppointments?.length < 1 ? (
						<p>Sem consultas registradas!</p>
					) : (
						userAppointments
							?.slice(minValue, maxValue)
							?.map((appointment, index) => (
								<div key={index}>
									<SytledCardInitial>
										<>
											<p>Consulta</p>
											<p>
												Data:
												{calcDate(appointment?.date)}
											</p>
											<p>
												Descrição:
												{appointment?.overview}
											</p>

											<ModalButton
												titleBtn={"Detalhes"}
												closeModal={closeModal}
												setCloseModal={setCloseModal}
											>
												{!closeModal && (
													<>
														<SytledTitle2>
															Médico:{appointment?.firstName}
														</SytledTitle2>
														<SytledCardOverview>
															<SytledTitle>Descrição:</SytledTitle>
															{appointment?.overview}
														</SytledCardOverview>

														<PatientCardHistory
															setCloseModal={setCloseModal}
															// physicianlD={appointment?.physicianlD}
															AppointmentId={appointment?.id}
															// appointmentDate={appointment?.date}
														></PatientCardHistory>
													</>
												)}
											</ModalButton>
										</>
									</SytledCardInitial>
								</div>
							))
					)}
					<StyledPagination
						defaultCurrent={1}
						defaultPageSize={numEachPage}
						onChange={handleChange}
						total={userAppointments.length}
					/>
				</SytledEnvelop>
			</SytledContainer>
		</>
	);
};

export default ListPatientHistory;
