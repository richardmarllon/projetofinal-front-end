import {
	ContactContainer,
	StyledLogoContainer,
	StyledBrand,
	StyledTag,
	HomeContainer,
	BtnContainer,
} from "./style";
import logo from "../../images/logoMobile.svg";
import brand from "../../images/brand.svg";
import ContactSection from "../../components/contact";
import { HomeOutlined } from "@ant-design/icons";
import registerIMG from "../../images/contact/register.svg";
import loginIMG from "../../images/contact/log-in.svg";
import { useHistory } from "react-router";

const ContactPage = () => {
	const history = useHistory();
	return (
		<ContactContainer>
			<StyledLogoContainer>
				<StyledTag src={logo} />
				<StyledBrand src={brand} />
			</StyledLogoContainer>
			<HomeContainer>
				<BtnContainer
					onClick={() => {
						history.push("/home");
					}}
				>
					<HomeOutlined alt="home clickable icon" />
					<span>home</span>
				</BtnContainer>
				<BtnContainer
					onClick={() => {
						history.push("/register");
					}}
				>
					<img src={registerIMG} alt="register clickable icon" />
					<span>registrar-se</span>
				</BtnContainer>
				<BtnContainer
					onClick={() => {
						history.push("/");
					}}
				>
					<img src={loginIMG} alt="login clickable icon" />
					<span>login</span>
				</BtnContainer>
			</HomeContainer>
			<ContactSection />
		</ContactContainer>
	);
};

export default ContactPage;
