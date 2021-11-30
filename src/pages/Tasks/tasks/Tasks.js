import React, { useState, useEffect, Fragment } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { createProject } from "../../../actions";
import cogoToast from "cogo-toast";

const Tasks = () => {
  const [selected, setSelected] = useState([]);
  const [priority, setPriority] = useState("0");
  const [tasksTable, setTaskTable] = useState([]);
  const [input, setInput] = useState("");
  const [projectId, setProjectId] = useState("");

  useEffect(() => {
    const projects = JSON.parse(localStorage.getItem("projects"));
    console.log(projects);
    if (projects.length !== 0) {
      let dropdown = [];
      projects.map((j) => {
        // code for adding data in the select project dropdown menu
        const selectData = {
          id: j.id,
          title: j.title,
        };
        dropdown.push(selectData);
      });
      setSelected(dropdown);
      setProjectId(projects[0].id);
      setTaskTable(projects[0].tasks);
    }
  }, []);

  // for handling the display of add task button
  const toggleAddTask = (index) => {
    document.querySelector(`.new-task${index}`).classList.toggle("hidden");
    document.querySelector(`.take-task${index}`).classList.toggle("hidden");
  };

  //for creating new task
  const createTask = (type, index) => {
    if (input !== "") {
      const projects = JSON.parse(localStorage.getItem("projects"));
      console.log(projects);

      const data = {
        id: new Date().getTime().toString(),
        desc: input,
        priority: priority,
      };

      projects.map((j) => {
        if (j.id == projectId) {
          j.tasks.map((i) => {
            if (i.title == type) {
              i.tasks.push(data);
            }
          });
          setTaskTable(j.tasks);
        }
      });

      console.log(projects);
      localStorage.setItem("projects", JSON.stringify(projects));
      toggleAddTask(index);
      setInput(""); // clearing the input value

      return cogoToast.success("Task added.", {
        position: "bottom-left",
      });
    } else {
      return cogoToast.info("Please enter task details.", {
        position: "bottom-left",
      });
    }
  };

  // when user selects another project
  const onProjectChange = (id) => {
    const projects = JSON.parse(localStorage.getItem("projects"));
    console.log(projects);

    projects.map((j) => {
      if (j.id == id) {
        setProjectId(j.id)
        setTaskTable(j.tasks)
      }
    })

  };

  return (
    <div className="mx-4">
      {/* for selecting projects */}
      <div className="flex justify-start">
        <select
          className="outline-none py-1 px-4 border rounded-md bg-gray-100 text-blue-500 mt-2
        hover:bg-gray-200 transform duration-300
        "
          onChange={(e) => onProjectChange(e.target.value)}
        >
          {selected.map((j, index) => {
            return (
              <option key={index} value={j.id}>
                {j.title}
              </option>
            );
          })}
        </select>
      </div>

      {/* for drag and drop section */}
      <DragDropContext onDragEnd={(result) => console.log(result)}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 my-4">
          {/* for creating mutiple columns */}
          {tasksTable.map((j, index) => {
            return (
              <Droppable droppableId={index} key={index}>
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    className="border rounded-md bg-gray-100"
                  >
                    <div className="heading bg-white w-full text-gray-400 text-left px-4 py-2">
                      {j.title}
                    </div>
                    <hr />
                    <div className="bg-gray-100">
                      {j.tasks.map((i) => {
                        return (
                          <Draggable draggableId={i.id} key={i.id}>
                            {(provided, snapshot) => (
                              <div
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                className="m-1 bg-white border rounded-md p-2"
                              >
                                <div className="priority flex justify-left">
                                  {i.priority == "0" ? (
                                    <div className="px-2 py-1 bg-blue-400 rounded-sm">
                                      <p className="text-xs text-white">Low</p>
                                    </div>
                                  ) : i.priority == "1" ? (
                                    <div className="px-2 py-1 bg-yellow-300 rounded-sm">
                                      <p className="text-xs text-white">
                                        Medium
                                      </p>
                                    </div>
                                  ) : (
                                    <div className="px-2 py-1 bg-red-400 rounded-sm">
                                      <p className="text-xs text-white">High</p>
                                    </div>
                                  )}
                                </div>
                                <p className="text-md text-left px-2 pt-2 font-thin text-gray-700">
                                  {i.desc}
                                </p>
                              </div>
                            )}
                          </Draggable>
                        );
                      })}

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
                            onChange={(e) => setInput(e.target.value)}
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
                                onClick={() => createTask(j.title, index)}
                                className="outline-none px-2 py-2 rounded-md text-green-400"
                              >
                                Add
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </Droppable>
            );
          })}
        </div>
      </DragDropContext>
    </div>
  );
};

export default Tasks;
