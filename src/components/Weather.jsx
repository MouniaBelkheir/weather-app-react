import PropTypes from "prop-types";

const Weather = ({ data }) => {
	return (
		<div className="flex flex-col w-[90%] items-start justify-center m-3 p-3 bg-gradient-to-b from-slate-500 to-blue-950 rounded-xl text-white">
			{data.weather ? (
				<div className="flex flex-col">
					<h1 className="text-2xl font-bold">
						{data.name}, {data.sys.country}
                    </h1>
                    <div className="flex flex-row justify-between items-center m-3">
					<div className="flex flex-col m-2 ">
						<h2>{data.main.temp.toFixed()} °C</h2>
						<h2>{data.weather[0].description}</h2>
					</div>
					<div>
						{" "}
						<img
							src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                                alt="weather"
                                className=""
						/>
                        </div>
                        </div>
				</div>
			) : null}
		</div>
	);
};

Weather.propTypes = {
	data: PropTypes.any,
};

export default Weather;
