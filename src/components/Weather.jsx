import PropTypes from "prop-types";

const Weather = ({ data }) => {
    return (
        <div>
            {data.Weather ? (
                <div className="bg-blue-300 relative top-[10%] rounded-xl">
                    <div className="flex justify-between">
                        <div className="w-1/2 flex mx-auto my-4 items-center justify-between">
                            <div className="flex flex-col items-start justify-start"></div>
                    </div>
                            <h1 className=" text-4xl">{data.name}</h1>
                        </div>
                    </div>
                
            ) : ""}
        </div>
    );
};

Weather.propTypes = {
    data: PropTypes.object.isRequired,
};

export default Weather;