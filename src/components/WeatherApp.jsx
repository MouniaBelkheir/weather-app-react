import axios from "axios";
import searchIcon from "/search.png";
import clear from "/clear.png";
import rain from "/rain.png";
import clouds from "/clouds.png";
import snow from "/snow.png";
import mist from "/mist.png";
import drizzle from "/drizzle.png";
import humidity from "/humidity.png";
import wind from "/wind.png";
import { useState } from "react";
import Weather from "./Weather";
const WeatherApp = () => {
	const [data, setData] = useState({});
	const [city, setCity] = useState("");
	const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=029c9199447e0eb55776ba3e5e8e7210`;
	const searchLocation = (event) => {
		if (event.key === "Enter") {
			axios.get(url).then((response) => {
				setData(response.data);
				console.log(response.data);
			});
			setCity("");
		}
	};
	return (
		<div className="flex flex-col items-center justify-center ">
			<div className="flex justify-between m-2 p-1 bg-slate-300 rounded-full relative">
				<input
					type="text"
					placeholder="Enter city"
					value={city}
					onChange={(e) => setCity(e.target.value)}
					onKeyDownCapture={searchLocation}
					className="outline-none bg-transparent text-slate-600 text-lg placeholder:text-gray-600 py-1 px-2  p-2"
				/>
				<img src={searchIcon} alt="Search" className="w-5 m-2 text-white" />
			</div>
			<Weather data={data} />
		</div>
	);
};

export default WeatherApp;
