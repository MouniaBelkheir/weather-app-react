import PropTypes from "prop-types";

const Weather = ({ data }) => {
	return (
		<>
			{" "}
			{data.weather ? (
				<div className="flex flex-col w-[90%] md:w-1/3 items-center justify-center m-3 rounded-3xl p-5 text-slate-200 z-10 backdrop-blur-sm">
					<h1 className="text-3xl font-bold p-3">
						{data.name}, {data.sys.country}
					</h1>
					<div className=" flex items-center w-full justify-between">
						<div className="flex flex-col m-4 w-full leading-loose">
							<h2 className="font-bold text-5xl my-6">
								{data.main.temp.toFixed()} °C
							</h2>
							<h2 className="font-semibold text-2xl my-1">{data.weather[0].description}</h2>
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
