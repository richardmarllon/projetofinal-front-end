import error404 from "../../images/error/error404.gif";
import {
	ImgError,
	Small,
	ImageReference,
	HomeContainer,
	ContainerError,
	StyledArrow,
	Div,
} from "./style";
import { useHistory } from "react-router";

const Error404Message = () => {
	const history = useHistory();
	return (
		<>
			<HomeContainer>
				<ContainerError>
					<StyledArrow
						onClick={() => {
							history.push("/home");
						}}
					/>
					<Div>
						<ImgError alt="Error404" src={error404} />
					</Div>
					<ImageReference href="https://storyset.com/web">
						<Small>Illustration by Freepik Storyset</Small>
					</ImageReference>
				</ContainerError>
			</HomeContainer>
		</>
	);
};
export default Error404Message;
