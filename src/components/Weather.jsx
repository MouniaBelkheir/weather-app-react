import PropTypes from "prop-types";

const Weather = ({ data }) => {
	return (
		<div className="flex flex-col items-start justify-start m-3 p-3 bg-gradient-to-b from-slate-500 to-blue-950 rounded-xl text-white">
			{data.weather ? (
				<div className="flex flex-col items-start justify-start">
					<h1 className="text-xl">
						{data.name}, {data.sys.country}, {data.main.temp}
					</h1>
					<h2>{data.weather[0].description}</h2>
				</div>
			) : null}
		</div>
	);
};

Weather.propTypes = {
	data: PropTypes.any,
};

export default Weather;
