import {
	ContactContainer,
	StyledLogoContainer,
	StyledBrand,
	StyledTag,
} from "./style";
import logo from "../../images/logoMobile.svg";
import brand from "../../images/brand.svg";
import ContactSection from "../../components/contact";

const ContactPage = () => {
	return (
		<ContactContainer>
			<StyledLogoContainer>
				<StyledTag src={logo} />
				<StyledBrand src={brand} />
			</StyledLogoContainer>
			<ContactSection />
		</ContactContainer>
	);
};

export default ContactPage;
