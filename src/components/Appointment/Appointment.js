import App from "../../App";
import Dropdown from "../Dropdown";

const Appointment = () => {
  const Appointment_type = ["email", "chat", "call", "Walk-in"];
  const Doctor_type = [
    "Dentist",
    "Gynecologist",
    "Dermatologist",
    "Oncologist",
    "Opthalmologist",
  ];

  return (
    <div className="h-full mt-2 p-4 sm:w-max md:w-96  shadow-2xl">
      <div className="flex flex-col items-center gap-2 justify-center ">
        <div className="font-bold text-2xl p-2">
          <p className="text-purple-600">BOOK AN APPOINTMENT</p>
        </div>
        <div class="flex flex-col w-64 ">
          <label
            for="Appointment Date"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          ></label>
          <input
            type="date"
            id="email"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="dd/mm/yy"
            required
          />
        </div>
        <div className=" flex flex-col justify-center items-center w-64">
          <label className="text-base"for="appt">Select a time:</label>
          <input className="w-full" type="time" id="appt" name="appt" />
        </div>
        <div>
          <Dropdown options={Appointment_type} />
        </div>
        <div>
          <Dropdown options={Doctor_type} />
        </div>
      </div>
    </div>
  );
};

export default Appointment;
