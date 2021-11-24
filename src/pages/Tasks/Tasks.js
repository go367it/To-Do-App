import { Tab } from "@headlessui/react";
import Projects from "./projects/Project";
import React from "react";
import Fade from "react-reveal/Fade";
import Notes from './notes/Notes'
import TasksSection from './tasks/Tasks'

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <div>
      <Fade>
        <div className="w-screen px-2 py-2">
          <Tab.Group>
            <Tab.List className="flex p-1">
              <Tab
                key="1"
                className={({ selected }) =>
                  classNames(
                    "px-4 py-3 flex gap-2 rounded-sm text-sm leading-5 font-medium transition duration-500",
                    "active:text-blue-500",
                    selected ? "bg-blue-200 text-blue-700" : "text-gray-400"
                  )
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
                </svg>
                Projects
              </Tab>

              <Tab
                key="2"
                className={({ selected }) =>
                  classNames(
                    "px-4 py-3 flex gap-2 rounded-sm text-sm leading-5 font-medium transition duration-500",
                    "active:text-blue-500",
                    selected ? "bg-blue-200 text-blue-700" : "text-gray-400"
                  )
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                </svg>
                Overview
              </Tab>

              <Tab
                key="3"
                className={({ selected }) =>
                  classNames(
                    "px-4 py-3 flex gap-2 rounded-sm text-sm leading-5 font-medium transition duration-500",
                    "active:text-blue-500",
                    selected ? "bg-blue-200 text-blue-700" : "text-gray-400"
                  )
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                </svg>
                Tasks
              </Tab>

              <Tab
                key="4"
                className={({ selected }) =>
                  classNames(
                    "px-4 py-3 flex gap-2 rounded-sm text-sm leading-5 font-medium transition duration-500",
                    "active:text-blue-500",
                    selected ? "bg-blue-200 text-blue-700" : "text-gray-400"
                  )
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
                  <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
                </svg>
                Notes
              </Tab>
            </Tab.List>
            <hr />
            <Tab.Panels className="mt-2">
              <Tab.Panel key="1">
                <Projects />
                {/* <Notes /> */}
              </Tab.Panel>
            </Tab.Panels>
            <Tab.Panels className="mt-2">
              <Tab.Panel key="2">
                dagh
              </Tab.Panel>
            </Tab.Panels>
            <Tab.Panels className="mt-2">
              <Tab.Panel key="3">
                <TasksSection />
              </Tab.Panel>
            </Tab.Panels>
            <Tab.Panels className="mt-2">
              <Tab.Panel key="4">
                <Notes />
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </Fade>
    </div>
  );
}
