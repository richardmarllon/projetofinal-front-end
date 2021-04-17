import { useEffect } from "react";
import { useAppointments } from "../../providers/AppointmentsProvider";
import "antd/dist/antd.css";
import { Carousel } from "antd";
import moment from "moment";
import { SytledCardInitial, SytledTitle, SytledCardOverview } from "./style";
import { useUsers } from "../../providers/UserProvider";

const AppointmentCard = ({ AppointmentId, setCloseModal }) => {
	const { getExamsofAppointment, examsAppointment } = useAppointments();
	const { loggedUser } = useUsers();
	// const physicianOfAppointment = getPhysicianAppointment(physicianlD);
	// const examsOfAppointment = getExamsofAppointment(AppointmentId);

	const calcDate = (date) => {
		date = moment(Number(date)).format("DD/MM/YYYY");

		return date;
	};

	useEffect(() => {
		getExamsofAppointment(AppointmentId);
	}, []);

	const filterAppoint = (a) => {
		return a?.appointmentId === AppointmentId;
	};

	const filterExam = examsAppointment?.filter(filterAppoint);

	console.log("AppointmentId", AppointmentId);
	console.log("examsOfAppointment", examsAppointment);
	return (
		<>
			{filterExam?.map((exams, index) => (
				<SytledCardOverview key={index}>
					<SytledTitle>Exame de : {exams?.description}</SytledTitle>
					<p>
						Especialidade:
						{exams?.physicianSpecialty}
					</p>
					<p>
						Data:
						{calcDate(exams?.date)}
					</p>
					<p>
						Resultado:
						{exams?.reportLink}
					</p>
				</SytledCardOverview>
			))}
		</>
	);
};

export default AppointmentCard;
