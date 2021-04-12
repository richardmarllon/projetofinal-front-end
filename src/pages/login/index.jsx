import FormLogin from "../../components/formLogin";
import { BrandContainer, BrandTag } from "./style";
import brand from "../../images/brand.svg";

const Login = () => {
	return (
		<>
			<BrandContainer>
				<BrandTag src={brand} />
			</BrandContainer>
			<FormLogin />
		</>
	);
};

export default Login;
