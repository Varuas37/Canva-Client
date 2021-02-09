import React, { useState } from "react";
import TextArea from "react-textarea-autosize";
import { connect } from "react-redux";
import { addList, addCards } from "../../Redux/Action/tasks";

function TaskActionButton({ list, addList, addCards, listID, boardID }) {

  const buttonText = list ? "Add another list" : "Add another card";
  const [formOpen, setFormOpen] = useState(false);
  const [formData, setFormData] = useState("");

  const onFormChange = (e) => {
    setFormData(e.target.value);
    console.log(formData);
  };
  const handleSubmit = () => {
    if (formData.length <= 0) {
      return;
    } 
    list ? addList(boardID, formData) : addCards(boardID, listID, formData);
    setFormData("");
    setFormOpen(false);
  };
  const handleFormOpen = () => {
    setFormOpen(!formOpen);
  };
  const closeForm = () => {
    setFormData("");
    setFormOpen(false);
  };

  const buttonTitle = list ? "Add List" : "Add Card";
  return formOpen ? (
    <div
      className="mt-2 cursor-pointer rounded-lg w-full p-4 bg-gray-50"
      style={{
        maxHeight: "600px",
        maxWidth: "272px",
        minWidth: "272px",
        minHeight: "80px",
        width: "272px",
        height: "fit-content",
        overflow: "hidden",
      }}
    >
      <TextArea
        id="title"
        name="title"
        className="w-full focus:outline-none focus:ring-2 focus:ring-purple-600 p-2 "
        placeholder="Enter a title for the card"
        autoFocus
        onChange={onFormChange}
        onBlur={closeForm}
        value={formData}
        style={{ resize: "none" }}
        minRows={2}
      ></TextArea>

      <button
        type="submit"
        onMouseDown={handleSubmit}
        className="bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 text-white p-2 rounded"
      >
        {buttonTitle}
      </button>
    </div>
  ) : (
    <div
      onClick={handleFormOpen}
      className="flex flex-row items-center overflow-y-scroll rounded cursor-pointer hover:bg-indigo-400 sm:p-2 mt-2 bg-gray-50"
      style={{
        maxHeight: "50px",
        maxWidth: "272px",
        minWidth: "272px",
        minHeight: "40px",
        width: "272px",
        height: "fit-content",
        overflow: "hidden",
      }}
    >
      <svg
        class="w-6 h-6"
        fill="currentColor"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
        ></path>
      </svg>
      <p>{buttonText}</p>
    </div>
  );
}
const mapStateToProps = (state) => ({
  tasks: state.tasks,
});
export default connect(mapStateToProps, { addList, addCards })(
  TaskActionButton
);
