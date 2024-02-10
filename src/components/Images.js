import { images } from "./App";
import Image from "./Image";

export default function Images({ curImg }) {
	return (
		<div className="image-container">
			{images.map((image, i) => curImg === i && <Image imgSource={image} />)}
		</div>
	);
}
