const PhysicianCard = ({ userPhysician }) => {
	return (
		<>
			<div>
				Espcialidade:
				{userPhysician.specialty}
				CRM:
				{userPhysician.crm}
				Contato:
				{userPhysician.cellphoneNumber}
			</div>
		</>
	);
};

export default PhysicianCard;
