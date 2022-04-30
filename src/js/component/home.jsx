import React, { useState } from "react";

//include images into your bundle
//import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [selectedColor, setSelectedColor] = useState("red");
	return (
		<div className="body1">
			<h1 className="text-center mt-5">TRAFINC LIGTHS WITH REACT!</h1>
			<div className="bodybath">
				<div className="bath"></div>
			</div>
			<div className="body2">
				<div className="box">
					<div
						onClick={() => setSelectedColor("red")}
						className={
							"ligth red" +
							(selectedColor === "red" ? " glow" : " ")
						}></div>
					<div
						onClick={() => setSelectedColor("yellow")}
						className={
							"ligth yellow" +
							(selectedColor === "yellow" ? " glow" : " ")
						}></div>
					<div
						onClick={() => setSelectedColor("green")}
						className={
							"ligth green" +
							(selectedColor === "green" ? " glow" : " ")
						}></div>
				</div>
			</div>
			<p>Mady be persyjr in 4geeks Academy</p>
		</div>
	);
};

export default Home;
