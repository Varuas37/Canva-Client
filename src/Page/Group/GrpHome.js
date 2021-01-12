import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import PostItem from './PostItem';
import CreatePost from './CreatePost';
import { connect } from 'react-redux';
import { getGroup } from '../../Redux/Action/group';
import { getPosts } from '../../Redux/Action/post';
function GrpHome({ getGroup, groupData, match, post, getPosts }) {
	const [id, setID] = useState(match.params[match.params[Object.keys(match.params)[0]]]);
	useEffect(() => {
        console.log(id);
		getGroup(parseInt(id));
	}, [id]);
	useEffect(() => {
		getPosts(parseInt(id));
    }, [id]);

	return (
		!groupData.loading &&
		(
			<div className="space-y-6 sm:px-6 lg:px-0 lg:col-span-9 ">
				<div>
					<div className="h-32 w-full lg:h-48">
						{/* bg-gradient-to-br from-yellow-800 rounded m-2 to-green-500  */}
						<img
							className="h-32 w-full object-cover lg:h-48"
							src={'https://source.unsplash.com/random;w=1950&amp;q=80'}
							alt=""
						/>
					</div>
					<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
						<div className="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
							<div className="flex">
								<img
									className="h-24 w-24 rounded-full ring-4 ring-white sm:h-32 sm:w-32"
									src={'https://source.unsplash.com/random'}
									alt=""
								/>
							</div>
							<div className="mt-6 sm:flex-1 sm:min-w-0 sm:flex sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
								<div className="sm:hidden 2xl:block mt-6 min-w-0 flex-1">
									<h1 className="text-2xl font-bold text-gray-900 truncate">Course Name</h1>
								</div>

								<div className="mt-6 flex flex-col justify-stretch space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4">
									<button
										type="button"
										className="inline-flex bg-indigo-500 justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-indigo-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
									>
										{/* <!-- Heroicon name: mail --> */}
										<svg
											className="-ml-1 mr-2 h-5 w-5 text-gray-400"
											fill="currentColor"
											// stroke="currentColor"
											viewBox="0 0 24 24"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="M13 10V3L4 14h7v7l9-11h-7z"
											></path>
										</svg>

										<span className="text-white">Member</span>
									</button>
								</div>
							</div>
						</div>
						<div className="hidden sm:block 2xl:hidden mt-6 min-w-0 flex-1">
							<h1 className="text-2xl font-bold text-gray-900 truncate">
								{groupData.group && groupData.group[0].title}
							</h1>
						</div>
					</div>
				</div>
				<CreatePost id={groupData.group[0]._id} groupID={groupData.group[0].groupID} />
				{post.posts.map((item) => ( item&&
					<PostItem
						key={item._id}
						id={groupData.group[0]._id}
						groupID={groupData.group[0].groupID}
						data={item}
					/>
				))}
			</div>
		)
	);
}

GrpHome.propTypes = {
	getGroup: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
	groupData: state.groupData,
	post: state.post,
});
export default connect(mapStateToProps, { getGroup, getPosts })(GrpHome);
