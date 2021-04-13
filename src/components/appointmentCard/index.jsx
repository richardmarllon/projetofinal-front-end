import { useAppointments } from "../../providers/AppointmentsProvider";

const AppointmentCard = ({ physicianlD, AppointmentId }) => {
	const {
		getExamsofAppointment,
		getPhysicianAppointment,
		appointmentDate,
	} = useAppointments();
	const physicianOfAppointment = getPhysicianAppointment(physicianlD);
	const examsOfAppointment = getExamsofAppointment(AppointmentId);
	console.log("physicianOfAppointment", physicianOfAppointment);
	console.log("examsOfAppointment", examsOfAppointment);
	return (
		<>
			<div>Olá</div>
		</>
	);
};

export default AppointmentCard;
