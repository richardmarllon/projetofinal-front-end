import { useEffect } from "react";
import { useAppointments } from "../../providers/AppointmentsProvider";
import "antd/dist/antd.css";
import { Carousel } from "antd";
import moment from "moment";
import {
	SytledCardInitial,
	SytledTitle,
	SytledCardOverview,
	PdfContainer,
} from "./style";
import { useUsers } from "../../providers/UserProvider";
import pdf from "../../images/Pdf.svg";

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
						Especialidade:&nbsp;
						{exams?.physicianSpecialty}
					</p>
					<p>
						Data: &nbsp;
						{calcDate(exams?.date)}
					</p>
					{exams.reportLink && (
						<PdfContainer>
							Resultado:&nbsp;
							<img
								src={pdf}
								alt="download exam pdf icon"
								onClick={() => {
									window.open(`${exams.reportLink}`, "_blank");
								}}
							/>
						</PdfContainer>
					)}
				</SytledCardOverview>
			))}
		</>
	);
};

export default AppointmentCard;
