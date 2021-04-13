import { useState } from "react";
import { useAppointments } from "../../providers/AppointmentsProvider";
import "antd/dist/antd.css";
import { Modal, Button } from "antd";
import { Pagination } from "antd";
import AppointmentCard from "../appointmentCard";

const ListAppointments = () => {
	const { userAppointments, examsAppointment } = useAppointments();
	const [isModalVisible, setIsModalVisible] = useState(false);
	const [minValue, setMinValue] = useState(0);
	const [maxValue, setMaxValue] = useState(4);
	const numEachPage = 4;

	console.log("userAppointments", userAppointments);
	// console.log("examsAppointment", examsAppointment);

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
			<div>"Consultas"</div>
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
								{appointment?.date}
							</p>
							<p>
								Descrição:
								{appointment?.overview}
							</p>
							<Button type="primary" onClick={showModal}>
								Detalhes
							</Button>
							<Modal
								title="Basic Modal"
								visible={isModalVisible}
								onCancel={handleCancel}
								footer={null}
							>
								<AppointmentCard
									physicianlD={appointment?.physicianlD}
									AppointmentId={appointment?.id}
									appointmentDate={appointment?.date}
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
