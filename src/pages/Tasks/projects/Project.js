import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Fade from "react-reveal/Fade";
import { createProject } from "../../../actions/index";

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
              <Fade>
                <div className="border-0 rounded-3xl shadow-lg relative flex flex-col w-full bg-white">
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
              </Fade>
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
    data2.map(j=>{
      dispatch(createProject(j))
    })
    // dispatch(createProject(JSON.parse(localStorage.getItem('projects'))))
  }, []);

  return (
    <div>
      <div className="heading flex justify-between px-3 py-3">
        <h1 className="text-3xl font-semibold">Projects Board</h1>

        <div className="add">
          <Modal />
        </div>

        {
          myList.map(j=>{
            return(
              <div key={j.id}>
                {j.title}
              </div>
            )
          })
        }
      </div>
    </div>
  );
};

export default Projects;
