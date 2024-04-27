import searchIcon from "/search.png";
import clear from "/clear.png";
import rain from "/rain.png";
import clouds from "/clouds.png";
import snow from "/snow.png";
import mist from "/mist.png";
import drizzle from "/drizzle.png";
import humidity from "/humidity.png";
import wind from "/wind.png";
const WeatherApp = () => {
  return (
      <div className="flex justify-center m-auto bg-gradient-to-b from-slate-500 to-blue-950 w-72 rounded-full my-52">
          <div className="flex p-2  ">
              <input type="text" placeholder="Enter city" className="outline-none bg-transparent text-slate-100" />
              <img src={searchIcon} alt="Search" className="w-5" />
          </div>
          
      
    </div>
  )
}

export default WeatherApp
