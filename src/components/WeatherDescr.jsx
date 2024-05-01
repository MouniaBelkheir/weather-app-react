import PropTypes from "prop-types";
import { GoSun } from "react-icons/go";
import { IoMoonSharp } from "react-icons/io5";

const WeatherDescription = ({ data, isDay }) => {
	return (
		<>
			{" "}
			{data.weather ? (
				<div className="flex flex-col w-[90%] md:w-1/3 items-center justify-center m-3 rounded-3xl p-5 text-white z-10 backdrop-blur-sm font-semibold text-2xl leading-loose">
					<h2>Feels like: {data.main.feels_like.toFixed()} °C</h2>
					<h2 className="pb-6">Humidity: {data.main.humidity.toFixed()} %</h2>
					<h2>{isDay ? <GoSun size={40} className="text-yellow-500" /> : <IoMoonSharp size={40}/>} </h2>
				</div>
			) : null}
		</>
	);
};

WeatherDescription.propTypes = {
	data: PropTypes.any,
	isDay: PropTypes.bool,
};

export default WeatherDescription;
