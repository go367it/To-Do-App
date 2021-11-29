import React, { useState, useEffect, Fragment } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { createProject } from "../../../actions";

const Tasks = () => {
  const [selected, setSelected] = useState([]);
  const [priority, setPriority] = useState("0");
  const [tasksTable, setTaskTable] = useState([]);
  const [input, setInput] = useState('')
  const [projectId, setProjectId] = useState('')

  useEffect(() => {
    const projects = JSON.parse(localStorage.getItem("projects"));
    console.log(projects);
    if (projects.length !== 0) {
      let dropdown = [];
      projects.map((j) => {
        // code for adding data in the select project dropdown menu
        const selectData = {
          id: new Date().getTime().toString(),
          title: j.title,
        };
        dropdown.push(selectData);
      });
      setSelected(dropdown);
      setProjectId(projects[0].id)
      setTaskTable(projects[0].tasks);
    }
  }, []);

  //for creating new task
  const createTask = () => {
    
  };

  // for handling the display of add task button
  const toggleAddTask = (index) => {
    document.querySelector(`.new-task${index}`).classList.toggle("hidden");
    document.querySelector(`.take-task${index}`).classList.toggle("hidden");
  };

  return (
    <div className="mx-4">
      {/* for selecting projects */}
      <div className="flex justify-start">
        <select
          className="outline-none py-1 px-4 border rounded-md bg-gray-100 text-blue-500 mt-2
        hover:bg-gray-200 transform duration-300
        "
        >
          {selected.map((j, index) => {
            return (
              <option key={index} value={j.title}>
                {j.title}
              </option>
            );
          })}
        </select>
      </div>

      {/* for drag and drop section */}
      <DragDropContext>
        <div className="grid grid-cols-4 gap-5 my-4">
          {/* for creating mutiple columns */}
          {tasksTable.map((j, index) => {
            return (
              <div className="border rounded-md bg-gray-100">
                <div className="heading bg-white w-full text-gray-400 text-left px-4 py-2">
                  {j.title}
                </div>
                <hr />
                <div className="bg-gray-100">
                  {/* button for adding a new task */}
                  <div className="add-task">
                    <div
                      onClick={() => toggleAddTask(index)}
                      className={`new-task${index} cursor-pointer text-gray-400 px-2 py-4 flex gap-3 hover:text-black`}
                      toggle="hidden"
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
                          strokeWidth={2}
                          d="M12 4v16m8-8H4"
                        />
                      </svg>
                      <p className="font-thin">Add tasks</p>
                    </div>

                    {/* for making a new task */}
                    <div
                      toggle="hidden"
                      className={`take-task${index} hidden px-2 py-4 bg-white m-3 border rounded-md`}
                    >
                      <input
                        placeholder="Task..."
                        value={input}
                        onChange={(e)=>setInput(e.target.value)}
                        className="outline-none text-gray-600 w-full px-3 bg-gray-50 py-1 border rounded-md"
                      />
                      <div className="flex justify-between">
                        {/* for selecting priority */}
                        <div>
                          <select
                            defaultValue={0}
                            onChange={(e) => setPriority(e.target.value)}
                            className="outline-none py-1 px-4 border rounded-md text-gray-400 mt-2"
                          >
                            <option value={0}>Low</option>
                            <option value={1}>Medium</option>
                            <option value={2}>High</option>
                          </select>
                        </div>

                        {/* for creating new task */}
                        <div className="flex justify-center md:justify-end">
                          <button
                            onClick={() => toggleAddTask(index)}
                            className="outline-none px-2 py-2 rounded-md text-red-400"
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
                                strokeWidth={2}
                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                              />
                            </svg>
                          </button>
                          <button 
                          onClick={()=>createTask()}
                          className="outline-none px-2 py-2 rounded-md text-green-400">
                            Add
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </DragDropContext>
    </div>
  );
};

export default Tasks;
