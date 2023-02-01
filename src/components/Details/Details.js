import Dropdown from "../Dropdown.js";

const Details = () => {
  const User_id = ["User Id","01", "02", "03", "04", "05", "06", "07", "08", "09", "10"];
  const Clinic_id = ["Clinc Id","101", "201", "301", "401", "501"];
  const Doctors_id = ["Doctor Name","Ravi Shrivastava", "Mukesh Ahuja", "Jagjeet Bora"];

  return (
    <div className="h-full mt-2 p-4 sm:w-max md:w-96  shadow-2xl bg-[#3F86BE]">
      <div className="flex flex-col justify-center ">
        <div className="font-bold text-2xl">
        <p className="text-[#FDFBF9]">DETAILS</p>
        </div>
        <div className="p-4  ">
          <Dropdown className="" options={User_id} />
        </div>
        <div className="p-4 ">
          <Dropdown options={Doctors_id} />
        </div>
        <div className="p-4 ">
          <Dropdown options={Clinic_id} />
        </div>
        <div className="">
          <label
            for="text"
            class="w-2/3 block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          ></label>
          <input
            type="text"
            id="text"
            class="w-2/3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Appointment Details"
            required
          />
        </div>
      </div>
    </div>
  );
};

export default Details;
