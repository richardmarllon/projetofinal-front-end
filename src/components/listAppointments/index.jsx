import { useState } from "react";
import { useAppointments } from "../../providers/AppointmentsProvider";
import "antd/dist/antd.css";
import { Modal, Button } from "antd";
import { Pagination } from "antd";
import moment from "moment";
import AppointmentCard from "../appointmentCard";

const ListAppointments = () => {
	const { userAppointments, examsAppointment } = useAppointments();
	const [isModalVisible, setIsModalVisible] = useState(false);
	const [minValue, setMinValue] = useState(0);
	const [maxValue, setMaxValue] = useState(4);
	const numEachPage = 4;

	console.log("userAppointments", userAppointments);
	// console.log("examsAppointment", examsAppointment);

	const calcDate = (date) => {
		date = moment(Number(date)).format("DD/MM/YYYY");

		return date;
	};

	const showModal = () => {
		setIsModalVisible(true);
	};

	const handleCancel = () => {
		setIsModalVisible(false);
	};

	const handleChange = (value) => {
		setMinValue((value - 1) * numEachPage);
		setMaxValue(value * numEachPage);
	};

	return (
		<>
			<div>"Histórico de consultas"</div>
			<div>
				{userAppointments
					?.slice(minValue, maxValue)
					?.map((appointment, index) => (
						<div>
							<p>Consulta</p>
							<p>
								Identificação:
								{appointment?.id}
							</p>
							<p>
								Especialidade do médico:
								{appointment?.medicalSpecialty}
							</p>
							<p>
								Médico:
								{appointment?.physicianName}
							</p>
							<p>
								Data:
								{calcDate(appointment?.date)}
							</p>

							<Button type="primary" onClick={showModal}>
								Detalhes
							</Button>
							<Modal
								title="Consulta"
								visible={isModalVisible}
								onCancel={handleCancel}
								footer={null}
							>
								<p>
									Médico:
									{appointment?.physicianName}
								</p>
								<p>
									Data:
									{calcDate(appointment?.date)}
								</p>
								<p>
									Descrição:
									{appointment?.overview}
								</p>
								<AppointmentCard
									// physicianlD={appointment?.physicianlD}
									AppointmentId={appointment?.id}
									// appointmentDate={appointment?.date}
								></AppointmentCard>
							</Modal>
						</div>
					))}
				<Pagination
					defaultCurrent={1}
					defaultPageSize={numEachPage}
					onChange={handleChange}
					total={userAppointments.length}
				/>
			</div>
		</>
	);
};

export default ListAppointments;
