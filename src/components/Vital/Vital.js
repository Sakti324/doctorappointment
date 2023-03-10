import StateCitySelector from "../StatenCity";
import Dropdown from "../Dropdown";

const Vital = () => {
  const Country = ["India"];

  return (
    <div className="mt-2 p-4 w-9/12 flex flex-col justify-center gap-2 border-1  shadow-2xl bg-[#3F86BE]">
      {" "}
      <div className="font-bold text-2xl">
      <p className="text-[#FDFBF9]">PATIENT VITALS</p>
      </div>
      <div className=" flex flex-row flex-wrap justify-evenly items-center gap-4 py-2 ">
        <div className="w-64">
          <label
            for="text"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          ></label>
          <input
            type="text"
            id="First_name"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="First Name"
            required
          />
        </div>
        <div className="w-64">
          <label
            for="text"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          ></label>
          <input
            type="text"
            id="last_name"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Last Name"
            required
          />
        </div>
       
      </div>
      <div className="flex flex-row flex-wrap justify-around items-center gap-2 py-2 ">
      <div className="w-64">
          <label
            for="text"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          ></label>
          <input
            type="text"
            id="email"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Address"
            required
          />
        </div>
        <StateCitySelector />
        <Dropdown options={Country} className="w-64"/>
      </div>
      <div className="flex flex-row flex-wrap justify-around items-center gap-2 py-2 ">
        {" "}
        
        <div className="w-64">
          <label
            for="text"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          ></label>
          <input
            type="Number"
            min="0"
            step=".1"
            id="email"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="BP"
            required
          />
        </div>
        <div className="w-64">
          <label
            for="text"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          ></label>
          <input
            type="Number"
            min="0"
            step=".1"
            id="email"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Pulse Rate"
            required
          />
        </div>
          <div className="w-64">
            <label
              for="text"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            ></label>
            <input
              type="Number"
              min="0"
              step=".1"
              id="email"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Height (in cms)"
              required
            />
          </div>
       </div>
       <div className="flex flex-row flex-wrap justify-around items-center gap-2 py-2 ">
        {" "}
          <div className="w-64">
            <label
              for="text"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            ></label>
            <input
              type="Number"
              min="0"
              step=".1"
              id="email"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Weight (in kgs)"
              required
            />
          </div>
          <div className="w-64">
            <label
              for="text"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            ></label>
            <input
              type="Number"
              min="0"
              step=".1"
              id="email"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Temp (in Fahrenheit)"
              required
            />
          </div>
          <div className="w-64">
            <label
              for="text"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            ></label>
            <input
              type="Number"
              min="0"
              step=".1"
              id="email"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="SpO2"
              required
            />
          </div>
        </div>
      
        <div className="flex md:flex-row  justify-around items-center gap-4 py-2 ">
          <div className="w-1/3 mb-6">
            <label
              for="text"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            ></label>
            <input
              type="text"
              id="email"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Short Note"
              required
            />
          </div>
          <div className="w-1/3 mb-6">
            <label
              for="text"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            ></label>
            <input
              type="text"
              id="email"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Prescription Note"
              required
            />
          </div>
        
      </div>
      <div className="flex flex-row gap-2 flex-wrap justify-center items-center py-2">
        {" "}
        <button
          type="button"
          class="w-24 text-[#3F86BE] bg-gradient-to-r from-blue-100 via-blue-200 to-blue-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >
          Reset
        </button>
        <button
          type="button"
          class="w-24 text-[#3F86BE] bg-gradient-to-r from-blue-100 via-blue-200 to-blue-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Vital;
