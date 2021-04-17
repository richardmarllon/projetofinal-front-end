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
	Title,
} from "./style";
import { Button } from "antd";
import { Pagination } from "antd";
import moment from "moment";
import AppointmentCard from "../appointmentCard";

const ListAppointments = ({ showAll }) => {
	const { userAppointments } = useAppointments();
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

	return (
		<>
			<SytledContainer>
				<StyledArrow
					onClick={() => {
						showAll();
					}}
				/>
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
											<Title>Consulta</Title>
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
															Médico:{appointment?.physicianName}
														</SytledTitle2>
														<SytledCardOverview>
															<SytledTitle>Descrição:</SytledTitle>
															{appointment?.overview}
														</SytledCardOverview>

														<AppointmentCard
															setCloseModal={setCloseModal}
															// physicianlD={appointment?.physicianlD}
															AppointmentId={appointment?.id}
															// appointmentDate={appointment?.date}
														></AppointmentCard>
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

export default ListAppointments;
