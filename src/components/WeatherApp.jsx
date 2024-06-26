import axios from "axios";
import { useState, useEffect } from "react";
import Weather from "./Weather";
import WeatherDescription from "./WeatherDescr";
import { IoIosSearch } from "react-icons/io";

const WeatherApp = () => {
	const [data, setData] = useState({});
	const [city, setCity] = useState("");
	const [isDay, setIsDay] = useState(true); // Initialize with default value

	useEffect(() => {
		// Fetch sunrise and sunset times
		axios
			.get(url)
			.then((response) => {
				const { sunrise, sunset } = response.data.sys;
				const currentTime = new Date().getTime() / 1000; // Current time in seconds
				setIsDay(currentTime >= sunrise && currentTime < sunset);
			})
			.catch((error) => {
				console.error("Error fetching sunrise/sunset times:", error);
			});
	}, [city]); // Fetch sunrise/sunset times when city changes

	const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=029c9199447e0eb55776ba3e5e8e7210`;

	const searchLocation = (event) => {
		if (event.key === "Enter") {
			axios.get(url).then((response) => {
				setData(response.data);
			});
			setCity("");
		}
	};

	return (
		<div className="flex flex-col items-center justify-center h-screen">
			<img
				src="https://images.unsplash.com/photo-1552083375-1447ce886485?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
				alt="bg"
				className="fixed top-0 left-0 w-screen h-screen object-cover z-0 brightness-50"
			/>
			<div className="flex justify-center m-6 p-1 bg-transparent/20 rounded-full z-10">
				<input
					type="text"
					placeholder="Enter city"
					value={city}
					onChange={(e) => setCity(e.target.value)}
					onKeyDownCapture={searchLocation}
					className="outline-none bg-transparent text-white text-lg placeholder:text-white py-1 px-2  p-2"
				/>
				<IoIosSearch size={30} className="m-2 text-white" />
			</div>
			<div className="flex-wrap md:flex justify-around w-full">
				<Weather data={data} isDay={isDay} />
				<WeatherDescription data={data} isDay={isDay} />
			</div>
		</div>
	);
};

export default WeatherApp;
