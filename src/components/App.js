import { useState } from "react";
import Images from "./Images";
import Button from "./Button";

export const images = [
	"https://images.pexels.com/photos/3836292/pexels-photo-3836292.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
	"https://images.pexels.com/photos/2792157/pexels-photo-2792157.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
	"https://images.pexels.com/photos/1166209/pexels-photo-1166209.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
	"https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
	"https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
];

export default function App() {
	const [curImg, setCurImg] = useState(0);

	function handleNext() {
		setCurImg((curImg) => (curImg === images.length - 1 ? 0 : curImg + 1));
	}

	function handlePrevious() {
		setCurImg((curImg) => (curImg === 0 ? images.length - 1 : curImg - 1));
	}

	return (
		<div className="container">
			<Button onClick={handlePrevious}>⬅</Button>
			<Images curImg={curImg} />
			<Button onClick={handleNext}>➡</Button>
		</div>
	);
}
