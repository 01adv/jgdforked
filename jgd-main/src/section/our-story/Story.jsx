

import React, { useEffect, useState } from "react";
import { FaClock, FaProjectDiagram, FaUsers } from "react-icons/fa";
import { IoPeople } from "react-icons/io5";
import img from "../../assets/ourstory.jpg";
import YouTubeThumbnail from "../../components/YouTube/YtEmbed";

const Story = () => {
  const [projectsCount, setProjectsCount] = useState(0);
  const [peopleCount, setPeopleCount] = useState(0);
  const [employeeCount, setEmployeeCount] = useState(0);
  const [timingCount, setTimingCount] = useState(0);

  let interval;

  useEffect(() => {
    const animateNumbers = () => {
      let projects = 0;
      let people = 0;
      let employees = 0;
      let timing = 0;

      interval = setInterval(() => {
        projects += 50; // Increment the count by a certain amount
        people += 50;
        employees += 50;
        timing += 5;

        if (projects >= 2097) {
          setProjectsCount("2097+");
          clearInterval(interval);
        } else {
          setProjectsCount(projects);
        }

        if (people >= 2590) {
          setPeopleCount("2590+");
        } else {
          setPeopleCount(people);
        }

        if (employees >= 400) {
          setEmployeeCount("400+");
        } else {
          setEmployeeCount(employees);
        }

        if (timing >= 100) {
          setTimingCount("100+");
        } else {
          setTimingCount(timing);
        }
      }, 50); // Set the interval time in milliseconds
    };

    animateNumbers();

    return () => clearInterval(interval); // Clean up interval on unmount
  }, []); // Empty dependency array ensures the effect runs only once

  return (
    <section className="py-10 lg:py-20 bg-stone-100 font-poppins dark:bg-gray-800">
      <div className="max-w-7xl py-4 mx-auto lg:py-6 md:px-6">
        <div className="flex flex-wrap ">
          <div
            className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0 "
          >
            <div className="lg:max-w-md">
              <div className="px-4 pl-4 mb-6 border-l-4 border-primary-500">
                <span className="text-sm text-gray-600 uppercase dark:text-gray-400">
                  Who we are?
                </span>
                <h1 className="mt-2 text-3xl font-black text-gray-700 md:text-5xl dark:text-gray-300">
                  About Us
                </h1>
              </div>
              <p className="px-4 mb-10 text-base leading-7 text-gray-500 dark:text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam Lorem ipsum dolor sit amet.
              </p>
              <div className="flex flex-wrap items-center">
                <div className="w-full px-4 mb-6 sm:w-1/2 md:w-1/2 lg:mb-6">
                  <div className="p-6 bg-white dark:bg-gray-900">
                    <span className="text-primary-500 dark:text-primary-400">
                      <FaProjectDiagram size={40} />
                    </span>
                    <p className="mt-4 mb-2 text-3xl font-bold text-gray-700 dark:text-gray-400">
                      {projectsCount}
                    </p>
                    <h2 className="text-sm text-gray-700 dark:text-gray-400">
                      Projects and Plans
                    </h2>
                  </div>
                </div>
                <div className="w-full px-4 mb-6 sm:w-1/2 md:w-1/2 lg:mb-6">
                  <div className="p-6 bg-white dark:bg-gray-900">
                    <span className="text-primary-500 dark:text-primary-400">
                      <IoPeople size={40} />
                    </span>
                    <p className="mt-4 mb-2 text-3xl font-bold text-gray-700 dark:text-gray-400">
                      {peopleCount}
                    </p>
                    <h2 className="text-sm text-gray-700 dark:text-gray-400">
                      Helped people
                    </h2>
                  </div>
                </div>
                <div className="w-full px-4 mb-6 sm:w-1/2 md:w-1/2 lg:mb-6">
                  <div className="p-6 bg-white dark:bg-gray-900">
                    <span className="text-primary-500 dark:text-primary-400">
                      <FaUsers size={40} />
                    </span>
                    <p className="mt-4 mb-2 text-3xl font-bold text-gray-700 dark:text-gray-400">
                      {employeeCount}
                    </p>
                    <h2 className="text-sm text-gray-700 dark:text-gray-400">
                      Employee
                    </h2>
                  </div>
                </div>
                <div className="w-full px-4 mb-6 sm:w-1/2 md:w-1/2 lg:mb-6">
                  <div className="p-6 bg-white dark:bg-gray-900">
                    <span className="text-primary-500 dark:text-primary-400">
                      <FaClock size={40} />
                    </span>
                    <p className="mt-4 mb-2 text-3xl font-bold text-gray-700 dark:text-gray-400">
                      {timingCount}
                    </p>
                    <h2 className="text-sm text-gray-700 dark:text-gray-400">
                      Timing
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex px-4 mb-10 lg:w-1/2 lg:mb-0 items-center justify-center">
            {/* <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/bJmf8kKwdqA?si=Wm4UQV8O54t8fTUM"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe> */}
            <YouTubeThumbnail videoId={"bJmf8kKwdqA?si=Wm4UQV8O54t8fTUM"}/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
