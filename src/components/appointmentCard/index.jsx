import { useEffect } from "react";
import { useAppointments } from "../../providers/AppointmentsProvider";
import moment from "moment";

const AppointmentCard = ({ AppointmentId }) => {
	const { getExamsofAppointment, examsAppointment } = useAppointments();
	// const physicianOfAppointment = getPhysicianAppointment(physicianlD);
	// const examsOfAppointment = getExamsofAppointment(AppointmentId);

	const calcDate = (date) => {
		date = moment(Number(date)).format("DD/MM/YYYY");

		return date;
	};

	useEffect(() => {
		getExamsofAppointment(AppointmentId);
	}, []);
	console.log("AppointmentId", AppointmentId);
	console.log("examsOfAppointment", examsAppointment);
	return (
		<>
			<div>
				{examsAppointment?.map((exams, index) => (
					<div key={index}>
						<h3>
							Exame:
							{exams?.description}
						</h3>
						<p>
							Especialidade:
							{exams?.physicianSpecialty}
						</p>
						<p>
							Médico:
							{exams?.physicianName}
						</p>
						<p>
							Data:
							{calcDate(exams?.date)}
						</p>
						<p>
							Resultado:
							{exams?.reportLink}
						</p>
					</div>
				))}
			</div>
		</>
	);
};

export default AppointmentCard;
