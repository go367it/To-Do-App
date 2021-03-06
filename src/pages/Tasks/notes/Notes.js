import React, { useState, useEffect } from "react";
import Fade from "react-reveal/Fade";
import { useSelector, useDispatch } from "react-redux";
import { createNote, deleteNote } from "../../../actions/index";
import cogoToast from "cogo-toast";

// importing icons
import { ViewGridAddIcon } from "@heroicons/react/solid";

export function Input() {
  const [showModal, setShowModal] = useState(false); // to set the state of the modal
  const [title, setTitle] = useState(""); // to handle the state of the title
  const [note, setNote] = useState(""); // to handle the state of the note

  const dispatch = useDispatch();

  // function to create notes
  const onClickSave = () => {
    if ((title != "", note != "")) {
      const currentData = {
        id: new Date().getTime().toString(),
        title: title,
        note: note,
      };
      let notes = JSON.parse(localStorage.getItem("notes"));
      notes.push(currentData);
      localStorage.setItem("notes", JSON.stringify(notes));
      dispatch(createNote(currentData));
      setTitle("");
      setNote("");
      setShowModal(false);
      return cogoToast.success("Note Created", {
        position: "bottom-left",
      });
    } else {
      return cogoToast.info("Please enter details.", {
        position: "bottom-left",
      });
    }
  };

  return (
    <>
      <input
        className="outline-none p-3 border border-gray-300 w-96 rounded transition duration-400"
        placeholder="Take a note..."
        onClick={() => setShowModal(true)}
      />

      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white">
                {/*header*/}

                <div className="flex items-start w-1xl justify-between p-5 rounded-t">
                  <h3 className="text-2xl font-semibold">Note</h3>
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
                    <input
                      className="py-2 px-2 border border-gray-300 outline-none rounded-md 
                    focus:ring-2 focus:ring-offset-0 focus:ring-blue-600 w-full focus:border-0
                    my-2 transition duratioin-300
                    "
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      placeholder="Title"
                    />

                    <textarea
                      id="description"
                      value={note}
                      onChange={(e) => setNote(e.target.value)}
                      rows="3"
                      className="py-2 px-2 border border-gray-300 outline-none rounded-md 
                    focus:ring-2 focus:ring-offset-0 focus:ring-blue-600 w-full focus:border-0
                    my-2"
                      placeholder="Note..."
                    ></textarea>
                  </div>
                </div>

                {/*footer*/}
                <div className="flex items-center justify-end p-4 rounded-b">
                  <button
                    onClick={() => onClickSave()}
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium 
                      text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 
                      focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 
                      focus-visible:ring-blue-500"
                    type="button"
                  >
                    Save
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

const Notes = () => {
  const dispatch = useDispatch();
  const myList = useSelector((state) => state.handleNotes.notes);

  useEffect(() => {
    if (localStorage.getItem("notes")) {
      console.log(localStorage.getItem("notes"));
      let notes = JSON.parse(localStorage.getItem("notes"));
      if (myList.length == 0) {
        notes.map((j) => {
          dispatch(createNote(j));
        });
      }
    } else {
      const notes = [];
      localStorage.setItem("notes", JSON.stringify(notes));
    }
  }, []);

  return (
    <div className="p-2">
      <Fade>

        <div>
          <Input />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 px-2 my-5 md:px-4">
          {myList.map((j) => {
            return (
              <Fade>
                <div
                key={j.data.id}
                className="border rounded-md p-2">
                  <div className='text-xl font-semibold text-left'>
                    {j.data.title}
                  </div>
                  <div className="text-md text-left py-3 px-2">
                    {j.data.note}
                  </div>
                </div>
              </Fade>
            );
          })}
        </div>
      </Fade>
    </div>
  );
};

export default Notes;
