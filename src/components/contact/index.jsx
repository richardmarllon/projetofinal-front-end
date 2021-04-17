import {
	PhoneContainer,
	SectionContainer,
	Title,
	PhoneIcon,
	PhoneNumber,
	Info,
	PhoneSection,
} from "./style";

const ContactSection = () => {
	return (
		<SectionContainer>
			<Title>Contato</Title>
			<PhoneContainer>
				<PhoneIcon />
				<Info>SAC: </Info>
				<PhoneNumber href="tel:0800-785-3131">0800-785-3131</PhoneNumber>
			</PhoneContainer>
			<PhoneContainer>
				<PhoneIcon />
				<Info>Empresas: </Info>
				<PhoneNumber href="tel:4004-3132">(0xx11) 4004-3132</PhoneNumber>
			</PhoneContainer>
			<PhoneContainer>
				<PhoneIcon />
				<Info>Contrate: </Info>
				<PhoneNumber href="tel:4004-3133">(0xx11) 4004-3133</PhoneNumber>
			</PhoneContainer>
		</SectionContainer>
	);
};

export default ContactSection;
