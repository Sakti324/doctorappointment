import Details from "../Details/Details.js";
import Appointment from "../Appointment/Appointment.js";
import Vital from "../Vital/Vital.js";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <div className="m-2 p-2 main_box flex flex-col justify-center  gap-3">
        <div className="flex flex-row items-between justify-evenly flex-wrap pb-4">
          <div className="Details ">
            <Details />
          </div>
          <div className="Appointment  ">
            <Appointment />
          </div>
        </div>
        <hr className="border border-dashed border-indigo-900 "/>
        <div className="flex flex-row items-between justify-evenly">
          <Vital />
        </div>
      </div>
    </div>
  );
};

export default Home;
