import PropTypes from "prop-types";

const Weather = ({ data }) => {
	return (
		<>
			{" "}
			{data.weather ? (
				<div className="flex flex-col w-[90%] md:w-1/3 items-center justify-center m-3 rounded-3xl p-5 text-slate-800 z-10 backdrop-blur-sm">
					<h1 className="text-2xl font-bold p-3">
						{data.name}, {data.sys.country}
					</h1>
					<div className=" flex items-center w-full justify-between">
						<div className="flex flex-col m-4 w-full font-bold text-3xl">
							<h2>{data.main.temp.toFixed()} °C</h2>
							<h2>{data.weather[0].description}</h2>
						</div>
						<div>
							<img
								src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
								alt="weather"
							/>
						</div>
					</div>
				</div>
			) : null}
		</>
	);
};

Weather.propTypes = {
	data: PropTypes.any,
};

export default Weather;
