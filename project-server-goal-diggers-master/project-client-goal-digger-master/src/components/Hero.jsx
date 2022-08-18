import React from "react";
import { ServerIcon, ExternalLinkIcon } from "@heroicons/react/solid";

import { AiOutlineSearch } from "react-icons/ai";
import beachVid from "../assets/beachVid.mp4";
import HelpIcon from "@mui/icons-material/Help";
import AddTaskIcon from "@mui/icons-material/AddTask";
import FlightIcon from "@mui/icons-material/Flight";
import StarIcon from "@mui/icons-material/Star";

import bgImg from "../assets/kansas.jpeg";

const Hero = () => {
  return (
    <>
      <div className="w-full h-screen relative">
        <video
          className="w-full h-full object-cover"
          src={beachVid}
          autoPlay
          loop
          muted
        />
        <div className="absolute w-full h-full top-0 left-0 bg-gray-900/30"></div>
        <div className="absolute top-0 w-full h-full flex flex-col justify-center text-center text-white p-4">
          <h2 className="text-5xl font-bold text-gray-200">
            Find the best place to live your dreams
          </h2>
          <h1 className="text-2xl pt-10">Travel with the Bucket List Vacation</h1>
          <h2 className="py-4">Top 1% Locations Worldwide</h2>
        </div>
      </div>
      <div
        name="home"
        className="w-full h-screen bg-zinc-200 flex flex-col justify-between"
      >
        <div className="grid md:grid-cols-2 max-w-[1240px] m-auto">
          <div className="flex flex-col justify-center md:items-start w-full px-2 py-8">
            <p className="text-2xl">
              Let us do the planning so you can just enjoy.
            </p>
            <h1 className="py-3 text-5xl md:text-7xl font-bold text-indigo-800">
              Bucket List Vacations
            </h1>
            <p className="mt-3 text-base sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
              We help the people to fullfill their dreams.
            </p>
            <div className="mt-8">
              <div className="inline-flex rounded-md shadow ">
                <a
                  href="/recommanded"
                  className="inline-flex items-center justify-center shadow-2xl px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-50 hover:text-indigo-800"
                >
                  View Exclusive Trips
                  <ExternalLinkIcon
                    className="-mr-1 ml-3 h-5 w-5 text-indigo-800"
                    aria-hidden="true"
                  />
                </a>
              </div>
            </div>
          </div>
          <div>
            <img
              className="w-full rounded-2xl shadow-2xl bg-white"
              src={bgImg}
              alt="heroimage"
            />
          </div>
          <div
            className="absolute flex flex-col py-6 md:min-w-[760px] bottom-[-97%]
            mx-1 md:left-1/2 transform md:-translate-x-1/2 bg-white
            border border-slate-300 rounded-xl text-center shadow-2xl"
          >
            <p className="font-medium text-xl">Our Services</p>
            <div className="flex justify-between flex-wrap px-4">
              <p className="flex px-4 py-2 text-slate-500">
                <FlightIcon className="h-6 text-indigo-600 mr-2" /> Join The
                Trip
              </p>
              <p className="flex px-4 py-2 text-slate-500">
                <AddTaskIcon className="h-6 text-indigo-600 mr-2" />
                Explore Bucket List
              </p>
              <p className="flex px-4 py-2 text-slate-500">
                <ServerIcon className="h-6 text-indigo-600 mr-2" /> Track
                Progress
              </p>
              <p className="flex px-4 py-2 text-slate-500">
                <HelpIcon className="h-6 text-indigo-600 mr-2" /> Ask For Help
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
