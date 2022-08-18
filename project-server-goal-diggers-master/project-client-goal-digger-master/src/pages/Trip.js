import { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { Link, useNavigate } from "react-router-dom";
import { IdentificationIcon } from "@heroicons/react/outline";

function Trip() {
  const [trips, setTrips] = useState([]);

  const sendGetRequest = async () => {
    try {
      let token = localStorage.getItem("token");

      let config = {
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": token,
        },
      };

      const response = await axios.get(
        "http://localhost:8000/api/trips/",
        config
      );
      setTrips(response.data);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    sendGetRequest();
  }, []);
  return (
    <div class="w-full py-24">
      <div class="max-w-5xl mx-auto px-6 sm:px-6 lg:px-8">
        <div class="bg-white w-full shadow rounded p-8">
          <div className="flex items-center mt-3 justify-center ">
          <Link to="/addtrip" className="p-2 border-2 border-blue-300 hover:border-blue-500 rounded-lg"><AddIcon/>Add Trip</Link>
        </div>
        <div className="lg:px-10 lg:py-2 border-b-2 border-gray-400 font-normal text-2xl">
          My Trips
        </div>
        <div className="pt-10 lg:px-20 grid grid-cols-1 gap-4">
          {trips.map((item) => (
            <TripCard trip={item} key={item.id} />
          ))}
        </div>
        </div>
      </div>
    </div>
    
  );
}
export default Trip;

const TripCard = ({ trip }) => {
  var status;
  if (trip.status) {
    status = "border-green-500";
  } else {
    status = "border-red-500";
  }

  return (
    <div className={`p-2 lg:p-4 overflow-hidden shadow-lg rounded-md border-2 ${status} bg-gray-300`}>
      <div className="grid grid-cols-1 lg:grid-cols-3">
        <div>
          {trip.city}
          <img src={trip.img} className="rounded-lg border-2 border-blue-300" />
        </div>
        <div className="lg:p-4 col-span-2">
          <div className="text-lg font-medium text-blue-500">{trip.name}</div>
          <div>{trip.description}</div>
        
        {console.log("tripid",trip._id)}
          <div>
            {moment.utc(trip.startDate).format("MMM Do, YYYY")}
            <RemoveIcon className="mb-1"/>
            {moment.utc(trip.endDate).format("MMM Do, YYYY")}
          </div>
          <div>
            <button className="bg-blue-500">
              <EditIcon />
            </button>{" "}
            |{" "}
            <button className="bg-red-700"
            >
              <DeleteIcon />
            </button>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};
