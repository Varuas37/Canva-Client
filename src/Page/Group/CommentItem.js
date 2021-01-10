import React, { Fragment, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
function CommentItem(props) {
	const { register, handleSubmit, watch, errors } = useForm();
	const createComment = useRef(null);
	const refSubmit = useRef(null);
	const onSubmit = async (data) => {
		// addComment(postID, data);
		createComment.current.value = '';
	};

	const [rows, setRows] = useState(3);

	const press = (event) => {
		var text = createComment.current.value;
		if (text == '') {
			createComment.current.rows = '2';
			setRows(2);
		}

		// On pressing Shift and Enter
		if (event.keyCode == 13 && event.shiftKey) {
			//Stops enter from creating a new line
			event.preventDefault();
			refSubmit.current.click();
			return true;
		}

		// On pressing BackSpace
		if (event.which == 8 || (event.which == 46 && createComment.current.rows !== '1' && text !== '')) {
			text = text.split('\n');

			if (!text[text.length - 1]) {
				if (rows !== 1) {
					setRows((prev) => prev - 1);
				}
				createComment.current.rows = rows.toString();
			}
		}

		// On pressing Enter
		if (event.keyCode == 13 && !event.shiftKey) {
			createComment.current.rows = rows.toString();
			setRows((prev) => prev + 1);
		}
	};

	return (
		<div>
			<section aria-labelledby="notes-title">
				<div className="bg-white shadow sm:rounded-lg sm:overflow-hidden">
					<div className="divide-y divide-gray-200">
						<div className="px-4 py-6 sm:px-6">
							<ul className="space-y-8">
								<li>
									<div className="flex space-x-3">
										<div className="flex-shrink-0">
											<img
												className="h-10 w-10 rounded-full"
												src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
												alt=""
											/>
										</div>
										<div>
											<div className="text-sm">
												<a href="#" className="font-medium text-gray-900">
													Leslie Alexander
												</a>
											</div>
											<div className="mt-1 text-sm text-gray-700">
												<p>
													Ducimus quas delectus ad maxime totam doloribus reiciendis ex.
													Tempore dolorem maiores. Similique voluptatibus tempore non ut.
												</p>
											</div>
											<div className="mt-2 text-sm space-x-2">
												<span className="text-gray-500 font-medium">4d ago</span>
												<span className="text-gray-500 font-medium">&middot;</span>
												<button type="button" className="text-gray-900 font-medium">
													Like
												</button>
											</div>
										</div>
									</div>
								</li>
							</ul>
						</div>
					</div>
					<div className="bg-gray-50 px-4 py-6 sm:px-6">
						<div className="flex space-x-3">
							<div className="flex-shrink-0">
								<img
									className="h-10 w-10 rounded-full"
									src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80"
									alt=""
								/>
							</div>
							<div className="min-w-0 flex-1">
								<form action="#">
									<div>
										<label for="comment" className="sr-only">
											About
										</label>
										<textarea
											ref={createComment}
											id="comment"
											name="comment"
											type="text"
											placeholder="Write a comment"
											onKeyDown={press}
											rows={rows}
											className="shadow-sm block w-full sm:px-4 sm:py-4 focus:ring-blue-500 focus:border-blue-500 sm:text-sm border-gray-300 rounded-md outline-none	"
											placeholder="Comment"
											style={{ resize: 'none' }}
										></textarea>
									</div>
									<div className="mt-3 flex items-center justify-between">
										<button
											ref={refSubmit}
											type="submit"
											className="inline-flex sm:hidden items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
										>
											Comment
										</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

CommentItem.propTypes = {};

export default CommentItem;
