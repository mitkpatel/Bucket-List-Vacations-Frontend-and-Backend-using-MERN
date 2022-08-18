import React, { useState, useEffect } from "react";
import Hero from "../components/Hero";
import StarIcon from "@mui/icons-material/Star";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import { Input, InputAdornment, IconButton } from "@material-ui/core";
import {
  PhoneIcon,
  ArrowSmRightIcon,
  NewspaperIcon,
  SupportIcon,
} from "@heroicons/react/outline";
import { ChipIcon } from "@heroicons/react/solid";

import supportImg from "../assets/support.jpg";

function Home() {
  const supportLinks = [
    {
      name: "Sales",
      href: "mailto:sales@bucketlistvacations.ca",
      description:
        "Our friendly sales staff would love to help you with any trip inquiries you may have! You can contact them using our toll free number 1-(888)-891-7712 or by emailing sales@bucketlistvacations.ca.",
      icon: PhoneIcon,
    },
    {
      name: "Technical Support",
      href: "mailto:support@bucketlistvacations.ca",
      description:
        "Any technical difficulties you have while using our website or app can be reported to technical support and they would be happy to assist you. Feel free to contact support@bucketlistvacations.ca for for any assistance.",
      icon: SupportIcon,
    },
    {
      name: "Media Inquiries",
      href: "mailto:media@bucketlistvacations.ca",
      description:
        "For any media inquiries please contact media@bucketlistvacations.ca",
      icon: NewspaperIcon,
    },
  ];

  const [info, setInfo] = useState([
    {
      id: "",
      title: "",
      desc: "",
    },
  ]);

  useEffect(() => {
    fetch("http://localhost:8000/api/home/gethomedata")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((jsonRes) => setInfo(jsonRes));
  });

  return (
    <>
      <Hero />
      <div name="about" className="w-full my-6">
        <div className="max-w-[1240px] mx-auto">
          <div className="text-center">
            <h2 className="text-5xl font-bold sm:mt-20">
              Trusted by many users from all over the world
            </h2>
            <p className="text-3xl py-6 text-gray-500">
              With the help of Bucket List Vacations, many people visit the
              trips and complete thier adventure goals in the life.
            </p>
          </div>

          <div
            className="grid md:grid-cols-3 gap-8
             px-2 text-center"
          >
            <div className="border py-8 rounded-xl shadow-xl">
              <p className="text-6xl font-bold text-indigo-600">95%</p>
              <p className="text-gray-400 mt-2">Success Rate</p>
            </div>
            <div className="border py-8 rounded-xl shadow-xl">
              <p className="text-6xl font-bold text-indigo-600">350+</p>
              <p className="text-gray-400 mt-2">Satisfied users</p>
            </div>
            <div className="border py-8 rounded-xl shadow-xl">
              <p className="text-6xl font-bold text-indigo-600">
                4.5{" "}
                <StarIcon
                  className="text-yellow-500 mr-2 justify-center"
                  style={{ transform: "scale(2)" }}
                ></StarIcon>
              </p>
              <p className="text-gray-400 mt-2">Overall Rating</p>
            </div>
          </div>
          <div
            className="grid md:grid-cols-3 gap-8
             px-2 py-4 text-center"
          >
            <div className="border py-8 rounded-xl shadow-xl">
              <p className="text-6xl font-bold text-indigo-600">24/7</p>
              <p className="text-gray-400 mt-2">Customer Support</p>
            </div>
            <div className="border py-8 rounded-xl shadow-xl">
              <p className="text-6xl font-bold text-indigo-600">
                20%{" "}
                <ArrowUpwardIcon
                  className="text-green-500 mr-2 mb-2 justify-center"
                  style={{ transform: "scale(2.4)" }}
                />
              </p>
              <p className="text-gray-400 mt-2">In Last month</p>
            </div>
            <div className="border py-8 rounded-xl shadow-xl">
              <p className="text-6xl font-bold text-indigo-600">1,000+</p>
              <p className="text-gray-400 mt-2">Registered Users</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white">
        {/* Header */}
        <div className="relative pb-32 bg-gray-800">
          <div className="absolute inset-0">
            <img
              className="w-full h-full object-cover"
              src={supportImg}
              alt=""
            />
            <div
              className="absolute inset-0 bg-gray-500"
              style={{ mixBlendMode: "multiply" }}
              aria-hidden="true"
            />
          </div>
          <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">
              Support
            </h1>
            <p className="mt-6 max-w-3xl text-2xl text-gray-300">
              Our goal is to make your vacation experience as easy as possible,
              so we take care of everything. All you have to do is show up! If
              you would like to get in contact with our support team please call{" "}
              <a
                href="tel:1-(888)-121-1212"
                className="text-indigo-300 font-bold"
              >
                1-(888)-121-1212
              </a>{" "}
              or use one of the emails below to get in contact with a specific
              team.
            </p>
          </div>
        </div>

        {/* Overlapping cards */}
        <section
          className="-mt-32 max-w-7xl mx-auto relative z-10 pb-32 px-4 sm:px-6 lg:px-8"
          aria-labelledby="contact-heading"
        >
          <h2 className="sr-only" id="contact-heading">
            Contact us
          </h2>
          <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8">
            {supportLinks.map((link) => (
              <div
                key={link.name}
                className="flex flex-col bg-white rounded-2xl shadow-xl"
              >
                <div className="flex-1 relative pt-16 px-6 pb-8 md:px-8">
                  <div className="absolute top-0 p-5 inline-block bg-indigo-600 rounded-xl shadow-lg transform -translate-y-1/2">
                    <link.icon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="text-xl font-medium text-gray-900">
                    {link.name}
                  </h3>
                  <p className="mt-4 text-base text-gray-500">
                    {link.description}
                  </p>
                </div>
                <div className="p-6 bg-gray-50 rounded-bl-2xl rounded-br-2xl md:px-8">
                  <a
                    href={link.href}
                    target="__blank"
                    className="text-base font-medium text-indigo-700 hover:text-indigo-600"
                  >
                    Contact us<span aria-hidden="true"> &rarr;</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <div className="bg-indigo-50">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-24 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl">
            <span className="block">Ready to dive in?</span>
            <span className="block text-indigo-600">Lets get you booked!</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <a
                href="/trips"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
              >
                View Trips
              </a>
            </div>
          </div>
        </div>
      </div>

      <main className="p-10 container mx-auto px-6 md:px-0">
        {/* <section>
          <h1 className="text-3xl font-bold text-gray-600 mb-10">
            Explore exotic locations in Finland
          </h1>
          <div className="grid sm:grid-cols-3 gap-4 grid-cols-2">
            <div>
              <div className="bg-gray-300 h-55">
                <img src={process.env.PUBLIC_URL + "img/kansas.jpeg"} />
              </div>
              <h3 className="text-lg font-semibold text-gray-500 mt-2">
                Vacation in <span className="text-gray-700">Paris</span>
              </h3>
            </div>
            <div>
              <div className="bg-gray-300 h-55">
                <img src={process.env.PUBLIC_URL + "img/kansas2.jpeg"} />
              </div>
              <h3 className="text-lg font-semibold text-gray-500 mt-2">
                Trip to <span className="text-gray-700">Toronto</span>
              </h3>
            </div>
            <div>
              <div className="bg-gray-300 h-55">
                <img src={process.env.PUBLIC_URL + "img/kansas.jpeg"} />
              </div>
              <h3 className="text-lg font-semibold text-gray-500 mt-2">
                Vacation in <span className="text-gray-700">Spain</span>
              </h3>
            </div>
          </div>
          <hr className="w-40 my-14 border-4 rounded-md sm:mx-0 mx-auto" />
        </section> */}
        <section>
          <h1 className="flex text-gray-600 font-bold text-3xl">
            The Bucket List Trips <br />
            (or how does the bucket list work).
          </h1>

          {
                info.map(info => 
                  <div className="flex flex-col mt-2">
               <div className="flex flex-col ">
              <h3 className="text-lg font-semibold text-gray-500 mt-2">
                {info.id}. {info.title}
              </h3>
              <p className="text text-gray-400">
                {info.desc}
              </p>
            </div>
          </div>
                )
            }         

         
        </section>
        <div className="mt-14">
          <p>Ps. You can also create your bucket list in few clicks!</p>
        </div>
      </main>
      <div className="bg-white">
        <div className="relative py-8">
          <div aria-hidden="true" className="hidden sm:block">
            <div className="absolute inset-y-0 left-0 w-1/2 bg-gray-50 rounded-r-3xl" />
            <svg
              className="absolute top-8 left-1/2 -ml-3"
              width={404}
              height={392}
              fill="none"
              viewBox="0 0 404 392"
            >
              <defs>
                <pattern
                  id="8228f071-bcee-4ec8-905a-2a059a2cc4fb"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={392}
                fill="url(#8228f071-bcee-4ec8-905a-2a059a2cc4fb)"
              />
            </svg>
          </div>
          <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="relative rounded-2xl px-6 py-10 bg-indigo-600 overflow-hidden shadow-xl sm:px-12 sm:py-20">
              <div
                aria-hidden="true"
                className="absolute inset-0 -mt-72 sm:-mt-32 md:mt-0"
              >
                <svg
                  className="absolute inset-0 h-full w-full"
                  preserveAspectRatio="xMidYMid slice"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 1463 360"
                >
                  <path
                    className="text-indigo-500 text-opacity-40"
                    fill="currentColor"
                    d="M-82.673 72l1761.849 472.086-134.327 501.315-1761.85-472.086z"
                  />
                  <path
                    className="text-indigo-700 text-opacity-40"
                    fill="currentColor"
                    d="M-217.088 544.086L1544.761 72l134.327 501.316-1761.849 472.086z"
                  />
                </svg>
              </div>
              <div className="relative">
                <div className="sm:text-center">
                  <h2 className="text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
                    Get notified when we launch new trips.
                  </h2>
                  <p className="mt-6 mx-auto max-w-2xl text-lg text-indigo-200">
                    Join our mailing list to get exclusive special access to
                    offers and get notified when we launch new trips!
                  </p>
                </div>
                <form
                  action="#"
                  className="mt-12 sm:mx-auto sm:max-w-lg sm:flex"
                >
                  <div className="min-w-0 flex-1">
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Email Address"
                      disableUnderline={true}
                      className="mt-2 w-full rounded-md border border-black bg-white px-2 text-lg text-logincolor md:h-12"
                    />
                    <div className="flex flex-col justify-center items-center mt-6">
                      <button className="px-8 py-3 bg-slate-600 hover:bg-neutral-900 hover:text-white  ">
                        Subscribe
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Home;
