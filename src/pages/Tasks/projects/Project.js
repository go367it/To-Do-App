import React, { useEffect, useState, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import Fade from "react-reveal/Fade";
import { createProject, deleteProject } from "../../../actions/index";
import { Menu, Transition } from "@headlessui/react";
import FolderIcon from "@heroicons/react/solid/FolderIcon";
import Calendar from "@heroicons/react/outline/CalendarIcon";
import TrashIcon from "@heroicons/react/outline/TrashIcon";
import PencilIcon from "@heroicons/react/outline/PencilIcon";

export function Modal() {
  const [showModal, setShowModal] = React.useState(false); // to set the state of the modal
  const [getTitle, setGetTitle] = useState("");
  const [getDesc, setGetDesc] = useState("");

  // to get the todays date
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const todayDate = String(date.getDate()).padStart(2, "0");
  const datePattern = `${year}-${month}-${todayDate}`;

  const dispatch = useDispatch();

  // function for creating project
  const addProject = () => {
    if (getTitle != "" && getDesc != "") {
      const currentData = {
        id: new Date().getTime().toString(),
        title: getTitle,
        desc: getDesc,
        created: datePattern,
      };
      console.log("dasf");
      const projectData = localStorage.getItem("projects");

      let projectData2 = JSON.parse(projectData);

      projectData2.push(currentData);

      localStorage.setItem("projects", JSON.stringify(projectData2));

      console.log(JSON.parse(localStorage.getItem("projects")), "36");

      // // const newData = JSON.parse(localStorage.getItem('projects'))

      dispatch(createProject(currentData));

      // clearing the data
      setGetDesc("");
      setGetTitle("");
      setShowModal(false);
    }
  };

  return (
    <>
      <button
        className="px-2 rounded-md py-2 border-2 bg-gray-50
        hover:text-blue-500 hover:bg-gray-100 transition duration-400
        "
        type="button"
        onClick={() => setShowModal(true)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 4v16m8-8H4"
          />
        </svg>
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white">
                {/*header*/}

                <div className="flex items-start w-1xl justify-between p-5 rounded-t">
                  <h3 className="text-2xl font-semibold">Project Details</h3>
                  <button
                    className="text-gray-400 px-1 py-1 rounded-full
                    hover:text-blue-500
                    transition duratioin-300
                    "
                    onClick={() => setShowModal(false)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
                {/*body*/}
                <div className="relative px-4 text-left flex-auto">
                  <div className="">
                    <label>Title</label>

                    <input
                      className="py-2 px-2 border-2 border-gray-200 outline-none rounded-md 
                    focus:ring-2 focus:ring-offset-0 focus:ring-blue-600 w-full focus:border-0
                    my-2 transition duratioin-300
                    "
                      onChange={(e) => setGetTitle(e.target.value)}
                      value={getTitle}
                      placeholder="project title"
                    />

                    <label>Description</label>

                    <textarea
                      id="description"
                      rows="3"
                      className="py-2 px-2 border-2 border-gray-200 outline-none rounded-md 
                    focus:ring-2 focus:ring-offset-0 focus:ring-blue-600 w-full focus:border-0
                    my-2"
                      placeholder="type description here"
                      value={getDesc}
                      onChange={(e) => setGetDesc(e.target.value)}
                    ></textarea>

                    <label>Start</label>

                    <input
                      id="startDate"
                      type="date"
                      value={datePattern}
                      disabled
                      className="py-2 px-2 border-2 border-gray-200 outline-none rounded-md
                    focus:ring-2 focus:ring-offset-0 focus:ring-blue-600 w-full focus:border-0
                    my-2
                    "
                    />
                  </div>
                </div>

                {/*footer*/}
                <div className="flex items-center justify-end p-4 rounded-b">
                  <button
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium 
                      text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 
                      focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 
                      focus-visible:ring-blue-500"
                    type="button"
                    onClick={() => addProject()}
                  >
                    Create Project
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}

const Projects = () => {
  const dispatch = useDispatch();
  const myList = useSelector((state) => state.handleProject.projects);

  // whenever the components loads it will fetch the data from the localstorage and update the store
  useEffect(() => {
    const data = localStorage.getItem("projects");
    const data2 = JSON.parse(data);
    if (myList.length == 0) {
      data2.map((j) => {
        dispatch(createProject(j));
      });
    }
    // dispatch(createProject(JSON.parse(localStorage.getItem('projects'))))
  }, []);

  // function to delete a project from the list
  const deleteFromProject = (id) => {
    dispatch(deleteProject(id));
  };

  return (
    <div>
      <div className="heading flex justify-between px-3 py-3">
        <h1 className="text-3xl font-semibold">Projects Board</h1>

        <div className="add">
          <Modal />
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 px-2 md:px-4">
        {myList.map((j) => {
          return (
            <Fade>
              <div
                key={j.data.id}
                className="flex cursor-text group border rounded-md border-gray-400
                hover:shadow-2xl transition duration-200
                text-left bg-gray-100 
                "
              >
                <div className="w-full">
                  <div
                    className="flex justify-between w-full bg-white p-4 rounded-t-md
                  "
                  >
                    <div className="flex truncate items-center justify-left gap-2 font-semibold">
                      <FolderIcon className="h-7 w-7 text-yellow-400" />
                      <p className="flex truncate ...">{j.data.title}</p>
                    </div>

                    <Menu as="div" className="relative inline-block text-left">
                      <div>
                        <Menu.Button>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-gray-400"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                          </svg>
                        </Menu.Button>
                      </div>

                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <div className="px-1 py-1 ">
                            <Menu.Item>
                              {({ active }) => (
                                <button
                                  className={`${
                                    active
                                      ? "bg-indigo-500 text-white gap-2"
                                      : "text-gray-900 gap-2"
                                  } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                                >
                                  <PencilIcon className="w-4 h-4" /> Edit
                                </button>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <button
                                  onClick={() => deleteFromProject(j.data.id)}
                                  className={`${
                                    active
                                      ? "bg-indigo-500 text-white gap-2"
                                      : "text-gray-900 gap-2"
                                  } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                                >
                                  <TrashIcon className="w-4 h-4" /> Delete
                                </button>
                              )}
                            </Menu.Item>
                          </div>
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  </div>

                  <hr />

                  <div className="description mt-4 w-full p-4">
                    <p className="text-sm truncate ...">{j.data.desc}</p>
                    <p className="flex gap-1 text-gray-500 items-center justify-end mt-2 text-xs text-right">
                      <Calendar className="h-4 w-4" />
                      {j.data.created}
                    </p>
                  </div>
                </div>
              </div>
            </Fade>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
