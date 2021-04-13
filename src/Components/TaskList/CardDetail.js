import React, { useState } from "react";
import PropTypes from "prop-types";
import Modal from "../Modal/Modal";
// import useOutsideClick from "../../hooks/useOutsideClick";

function CardDetail({ data, setOpenCardDetail, openCardDetail }) {
  const upCommingFeatures = [
    {
      id: 1,
      text: "A checklist for current tasks",
      status: true,
    },
    {
      id: 0,
      text: "Add / update descriptions",
      status: false,
    },
    {
      id: 2,
      text: "Assign card to a member",
      status: false,
    },
    {
      id: 3,
      text: "Show Progressbar for current card",
      status: false,
    },
    {
      id: 4,
      text: "Archive/Delete Cards",
      status: false,
    },
    {
      id: 5,
      text: "A checklist for current tasks",
      status: false,
    },
    {
      id: 6,
      text: "Assign card to a member",
      status: false,
    },
    {
      id: 7,
      text: "Show Progressbar for current card",
      status: false,
    },
    {
      id: 8,
      text: "Archive/Delete Cards",
      status: false,
    },
    {
      id: 9,
      text: "A checklist for current tasks",
      status: false,
    },
    {
      id: 10,
      text: "Assign card to a member",
      status: false,
    },
    {
      id: 11,
      text: "Show Progressbar for current card",
      status: false,
    },
    {
      id: 12,
      text: "Archive/Delete Cards",
      status: false,
    },
  ];
  const [openDescription, setOpenDescription] = useState(false);
  const toggleCardDetail = () => {
    setOpenCardDetail(!openCardDetail);
  };

  const onClickDescrp = () => {
    setOpenDescription(!openDescription);
  };
  return (
    <Modal>
      <div className="hidescrollbar mt-10 justify-center items-center flex overflow-x-auto overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-7xl mx-auto max-w-5xl">
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            <div className="flex items-center justify-between p-5 rounded-t">
              <svg
                class="w-6 h-6 text-gray-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                ></path>
              </svg>

              <h3 className="text-xl ml-4 font-semibold">{data.title}</h3>
              <button
                className="p-1 hover:bg-gray-200 hover:text-white rounded-full flex items-center justify-center ml-auto bg-transparent text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={toggleCardDetail}
              >
                <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                  ×
                </span>
              </button>
            </div>

            {/* Description */}
            <div className="flex flex-row justify-start p-5 items-center w-full">
              <svg
                class="w-4 h-4 text-gray-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                ></path>
              </svg>
              <h1 className="text-lg ml-4 font-semibold">Description</h1>
            </div>
            <div className="flex flex-col ml-15">
              <textarea
                onClick={onClickDescrp}
                onBlur={() => setOpenDescription(false)}
                autoFocus
                style={{ resize: "none" }}
                rows="3"
                placeholder="Add Details"
                className={`rounded p-2 w-4/5  ${
                  openDescription ? "bg-white" : "bg-gray-100"
                } text-gray-800 outline-none`}
              ></textarea>
              {openDescription ? (
                <button
                  style={{ width: "70px" }}
                  className="cursor-pointer bg-indigo-600 hover:bg-indigo-400 rounded shadow  sm:p-2 mt-2 text-white p-2  bg-gray-50"
                >
                  Save
                </button>
              ) : null}
            </div>
            {/*body*/}
            <div
              className="relative p-4 flex-auto ml-15"
              style={{ minHeight: "600px", minWidth: "400px" }}
            >
              <div
                className="text-gray-600 leading-relaxed"
                style={{ width: "78%" }}
              >
                <p>
                  I am the only one working on this website so it is still under
                  development. I am working hard to have all the features set up
                  while trying to make a MVP.
                </p>
                <h1 className="text-lg mt-6 font-semibold">
                  Up Comming Features
                </h1>
                <div className="bg-white shadow overflow-hidden sm:rounded-md mt-3">
                  <ul
                    className="hidescrollbar divide-y divide-gray-200 overflow-y"
                    style={{ height: "300px", overflowX: "auto" }}
                  >
                    {upCommingFeatures.map((items) => (
                      <li className="px-4 py-4 sm:px-6 flex justify-start items-center">
                        <svg
                          className={`w-6 h-6 `}
                          fill={`${items.status ? "none" : "none"}`}
                          stroke={`${items.status ? "green" : "currentColor"}`}
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          ></path>
                        </svg>
                        <p className="ml-4">{items.text}</p>
                      </li>
                    ))}

                    {/* <!-- More items... --> */}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </Modal>
  );
}

CardDetail.propTypes = {
  data: PropTypes.object.isRequired,
};
CardDetail.defaultProps = {
  data: {
    data: "hello",
    todo: "list",
  },
};

export default CardDetail;

// const modalRef = useRef();

// useOutsideClick(modalRef, () => {
//   if (openCardDetail) setOpenCardDetail(false);
// });
