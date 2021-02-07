
import React, {  useState,useEffect} from 'react';
import { connect } from 'react-redux';
import { useForm } from 'react-hook-form';
import {Link} from "react-router-dom"
import Header from '../../Components/Header/Header';
import PropTypes from 'prop-types';
import { addBoard,getBoards } from '../../Redux/Action/tasks';
import Modal from '../../Components/Modal/Modal';

function CreateBoard({ tasks,getBoards,addBoard}) {
  const { register, handleSubmit, errors } = useForm();
	const { boards } = tasks;

	const onSubmit = (data) => {
		addBoard(data);
    toggleModal();
	};
  useEffect(() => {
    getBoards();  
  }, [])
	const [modalOpen, setModalOpen] = useState(false);
  
  const toggleModal = () => {
    console.log("Clicked Toggle Modal")
		setModalOpen(!modalOpen);
    console.log(modalOpen);
	};

	return (
		<div>
			<Header data={'All Boards'}></Header>
			<div className=" bg-white h-screen flex  justify-center items-center rounded-lg ">
				<div className="max-w-7xl h-full w-full flex sm:flex-row flex-col space-x-4 justify-center items-start mt-40 mb-40">
					<div
						onClick={toggleModal}
						className=" cursor-pointer	hover:shadow-xl bg-gray-200 shadow-md rounded sm:w-1/5 sm:h-1/5 w-full h-2/6 round-2xl  font-medium text-2xl flex justify-center items-center "
					>
						+ Add
					
					</div>
          	{modalOpen ? 	(
            <Modal>
	    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
    {/* <!--
      Background overlay, show/hide based on modal state.

      Entering: "ease-out duration-300"
        From: "opacity-0"
        To: "opacity-100"
      Leaving: "ease-in duration-200"
        From: "opacity-100"
        To: "opacity-0"
    --> */}
    <div className="fixed inset-0 transition-opacity ease-out duration-300 opacity-0 opacity-100" aria-hidden="true">
      <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
    </div>

    {/* <!-- This element is to trick the browser into centering the modal contents. --> */}
    <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
    {/* <!--
      Modal panel, show/hide based on modal state.

      Entering: "ease-out duration-300"
        From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        To: "opacity-100 translate-y-0 sm:scale-100"
      Leaving: "ease-in duration-200"
        From: "opacity-100 translate-y-0 sm:scale-100"
        To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
    --> */}
    <form  onSubmit={handleSubmit(onSubmit)} noValidate aria-labelledby="modal-headline" role="dialog" className="transition ease-out duration-300 opacity-100 translate-y-0 sm:scale-100 inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
      <div
      >
        <div className="mt-3 text-center sm:mt-5">
          <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-headline">
           Create Board
          </h3>
          <div className="mt-2 border p-2 rounded w-full items-center">
         
          <input ref={register({ required: true, minLength: 1 })}
         placeholder="Enter Title"
        id="title"
        name="title"
        className="w-full outline-gray-100 focus:outline-none focus:ring focus:border-blue-300"/>
          </div>
        {errors.title && errors.title.type === 'required' && (
											<p className="text-red-800 text-xs ">Title is required</p>
				)}
        </div>
      </div>
      <div className="mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense">
        <button type="submit"  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:col-start-2 sm:text-sm">
          Create
        </button>
        <button onClick= {toggleModal} type="button" className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:col-start-1 sm:text-sm">
          Cancel
        </button>
      </div>
    </form>
  </div>
</div>
		</Modal>) : null}
					{boards &&
						boards.map((board) => (
							<Link to ={`/boards/${board._id}`}
								key={board.id}
								className={`bg-red-100 cursor-pointer	hover:shadow-xl shadow-sm rounded sm:w-1/5 sm:h-1/5 w-full h-2/6 round-2xl  font-medium text-2xl flex justify-center items-center`}
							>
								{board.title}
							</Link>
						))}
				</div>
			</div>
		</div>
	);
}

CreateBoard.PropTypes = {
	boards: PropTypes.object.isRequired,
	addBoard: PropTypes.func.isRequired,
	getBoards: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
	tasks: state.tasks,
});

export default connect(mapStateToProps, { addBoard,getBoards })(CreateBoard);
