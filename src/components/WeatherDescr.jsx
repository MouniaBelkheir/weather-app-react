import PropTypes from "prop-types";

const WeatherDescription = ({ data }) => {
	return (
		<>
			{" "}
			{data.weather ? (
				<div className="flex flex-col w-[90%] md:w-1/3 items-center justify-center m-3 rounded-3xl p-5 text-slate-200 z-10 backdrop-blur-sm font-semibold text-2xl leading-loose">
					<h2>Feels like: {data.main.feels_like.toFixed()} °C</h2>
					<h2>Humidity: {data.main.humidity.toFixed()} %</h2>
				</div>
			) : null}
		</>
	);
};

WeatherDescription.propTypes = {
	data: PropTypes.any,
};

export default WeatherDescription;
