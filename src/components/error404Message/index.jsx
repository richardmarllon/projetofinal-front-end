import error404 from "../../images/error/error404.gif";
import { Div, Img, A, Small } from "./style";
import { Link } from "react-router-dom";

const Error404Message = () => {
	return (
		<>
			<Div>
				<Img alt="Error404" src={error404}></Img>
				<A href="https://storyset.com/web">
					<Small>Illustration by Freepik Storyset</Small>
				</A>
			</Div>
			<Link to="/">Voltar</Link>
		</>
	);
};
export default Error404Message;
