import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createProject } from "../../../actions/index";

export function Modal() {
  const [showModal, setShowModal] = React.useState(false); // to set the state of the modal

  const dispatch = useDispatch();

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
              <div className="border-0 rounded-sm shadow-lg relative flex flex-col w-full bg-white">
                {/*header*/}
                <div className="flex items-start w-1xl justify-between p-5 rounded-t">
                  <h3 className="text-2xl font-semibold">Project Details</h3>
                  <button
                    className="text-gray-400 px-2 py-2 rounded-sm hover:bg-gray-200
                    hover:text-gray-500 focus:ring-2 focus:ring-gray-300 focus:bg-gray-50
                    transition duratioin-300
                    "
                    onClick={() => setShowModal(false)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
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
                    ></textarea>

                    <label>Start</label>

                    <input id="startDate" type="date"
                    className="py-2 px-2 border-2 border-gray-200 outline-none rounded-md
                    focus:ring-2 focus:ring-offset-0 focus:ring-blue-600 w-full focus:border-0
                    my-2
                    "
                    onChange={(e)=>console.log(e.target.value)}
                    />
                  </div>
                </div>

                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Save Changes
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
  let projects = useSelector((state) => state.createProject.projects);
  const dispatch = useDispatch();

  // whenever the components loads it will fetch the data from the localstorage and update the store
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("projects"));
    dispatch(createProject(data));
  }, [projects]);

  return (
    <div>
      <div className="heading flex justify-between px-3 py-3">
        <h1 className="text-3xl font-semibold">Projects Board</h1>

        <div className="add">
          <Modal />
        </div>
      </div>
    </div>
  );
};

export default Projects;
