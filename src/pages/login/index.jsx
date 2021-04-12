import FormLogin from "../../components/formLogin";
import {
	BrandMobileContainer,
	BrandTag,
	ContentContainer,
	FamilyContainer,
	FamilyTag,
	LoginContainer,
} from "./style";
import brand from "../../images/brand.svg";
import family from "../../images/familyLogin.svg";

const Login = () => {
	return (
		<ContentContainer>
			<FamilyContainer>
				<FamilyTag src={family} />
			</FamilyContainer>
			<BrandMobileContainer>
				<BrandTag src={brand} />
			</BrandMobileContainer>
			<LoginContainer>
				<FormLogin />
			</LoginContainer>
		</ContentContainer>
	);
};

export default Login;
