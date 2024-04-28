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
	const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=029c9199447e0eb55776ba3e5e8e7210`;
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
		<div className="flex justify-center m-auto bg-gradient-to-b from-slate-500 to-blue-950 w-72 rounded-full my-52 relative">
			<div className="flex p-2 text-center">
				<input
					type="text"
					placeholder="Enter city"
					value={city}
					onChange={(e) => setCity(e.target.value)}
					onKeyDownCapture={searchLocation}
					className="outline-none bg-transparent text-slate-100 text-lg placeholder:text-gray-100 py-1 px-2"
				/>
				<img src={searchIcon} alt="Search" className="w-5 m-2 text-white" />
            </div>
            <Weather data={data} />
		</div>
	);
};

export default WeatherApp;
