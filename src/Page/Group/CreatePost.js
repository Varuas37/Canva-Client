import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from '../../Components/Modal/Modal';
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import { addPost } from '../../Redux/Action/post';
function CreatePost({ id, addPost, groupID }) {
	const { register, handleSubmit, errors } = useForm();
	const [modalOpen, setModalOpen] = useState(false);
	

	const onSubmit = (data) => {
		const { text, tags } = data;
		addPost(text, id, tags, groupID);
		console.log(text, id, tags);
		setModalOpen(false);
	};
	const toggleModal = () => {
		setModalOpen(!modalOpen);
	};

	return (
		<div>
			<div className="bg-white overflow-hidden shadow rounded-lg">
				<div className="px-2 py-2 sm:p-3">
					<div
						onClick={toggleModal}
						className="w-full rounded outline-none cursor-pointer p-2 hover:bg-gray-100 text-gray-400"
					>
						Create a post
					</div>
				</div>
			</div>
			{modalOpen ? (
				<Modal>
					<div className="fixed z-10 inset-0 overflow-y-auto">
						<div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
							<div className="fixed inset-0 transition-opacity" aria-hidden="true">
								<div className="absolute inset-0 bg-gray-500 opacity-75"></div>
							</div>

							<span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
								&#8203;
							</span>

							<form
								className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6"
								role="dialog"
								onSubmit={handleSubmit(onSubmit)}
								noValidate
								aria-modal="true"
								aria-labelledby="modal-headline"
							>
								<div>
									<div className="mt-2 text-center sm:mt-5">
										<h3
											className="text-lg leading-6 font-medium text-gray-900 mb-4"
											id="modal-headline"
										>
											Create Posts
										</h3>
										<div className="">
											<textarea
												ref={register({ required: true, minLength: 4 })}
												className="text-sm text-gray-500 w-full border resize-none rounded-lg px-4 py-4"
												placeholder="Write a post"
												rows="10"
												id="text"
												name="text"
											></textarea>
										</div>
										{errors.text && errors.text.type === 'required' && (
											<p className="text-red-800 text-xs ">Text is required</p>
										)}
										{errors.text && errors.text.type === 'minLength' && (
											<p className="text-red-800 text-xs ">
												Minimum 4 characters required to post
											</p>
										)}
									</div>
								</div>

								<div>
									<input
										ref={register({})}
										id="tags"
										name="tags"
										className="w-full sm:mt-4 p-2 shadow "
										placeholder="Tags, seperate with space"
									/>
								</div>

								<div className="mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense">
									<button
										type="submit"
										className={`w-full disabled:bg-gray-100
										
										inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:col-start-2 sm:text-sm`}
									>
										Post
									</button>
									<button
										onClick={toggleModal}
										type="button"
										className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:col-start-1 sm:text-sm"
									>
										Cancel
									</button>
								</div>
							</form>
						</div>
					</div>
				</Modal>
			) : null}
		</div>
	);
}

CreatePost.propTypes = {
	id:PropTypes.string.isRequired,
	addPost:PropTypes.func.isRequired,
	groupID:PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
	auth:state.auth,
});

export default connect(mapStateToProps, { addPost })(CreatePost);
