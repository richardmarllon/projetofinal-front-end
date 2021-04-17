import About from "../../components/about";
import {
	StyledLogoContainer,
	StyledBrand,
	StyledTag,
	HomeContainer,
	BtnContainer,
} from "../contact/style";
import logo from "../../images/logoMobile.svg";
import brand from "../../images/brand.svg";
import registerIMG from "../../images/contact/register.svg";
import loginIMG from "../../images/contact/log-in.svg";
import { HomeOutlined } from "@ant-design/icons";
import { useHistory } from "react-router";
import { AboutContainer } from "./style";

const AboutPage = () => {
	const history = useHistory();
	return (
		<AboutContainer>
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
			<About />
		</AboutContainer>
	);
};

export default AboutPage;
