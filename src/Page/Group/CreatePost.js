import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from '../../Components/Modal/Modal';

function CreatePost(props) {
	const [modalOpen, setModalOpen] = useState(false);
    
	const toggleModal = () => {
		setModalOpen(!modalOpen);
	};
	return (
		<div>
			<div class="bg-white overflow-hidden shadow rounded-lg">
				<div class="px-2 py-2 sm:p-3">
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
					<div class="fixed z-10 inset-0 overflow-y-auto">
						<div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
							<div class="fixed inset-0 transition-opacity" aria-hidden="true">
								<div class="absolute inset-0 bg-gray-500 opacity-75"></div>
							</div>

							<span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
								&#8203;
							</span>

							<div
								class="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6"
								role="dialog"
								aria-modal="true"
								aria-labelledby="modal-headline"
							>
								<div>
									<div class="mt-2 text-center sm:mt-5">
										<h3
											class="text-lg leading-6 font-medium text-gray-900 mb-4"
											id="modal-headline"
										>
											Create Post
										</h3>
										<div class="">
											<textarea
												class="text-sm text-gray-500 w-full border resize-none rounded-lg px-4 py-4"
												placeholder="Write a post"
												rows="10"
											></textarea>
										</div>
									</div>
								</div>
								<div class="mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense">
									<button
										type="button"
										class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:col-start-2 sm:text-sm"
									>
										Post
									</button>
									<button
										onClick={toggleModal}
										type="button"
										class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:col-start-1 sm:text-sm"
									>
										Cancel
									</button>
								</div>
							</div>
						</div>
					</div>
				</Modal>
			) : null}
		</div>
	);
}

CreatePost.propTypes = {};

export default CreatePost;
