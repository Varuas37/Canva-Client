import React from 'react';
import {Link} from "react-router-dom";
import animationData from './404Error1.json';
import Lottie from 'react-lottie';

function NotFound() {
	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: animationData,
		rendererSettings: {
			preserveAspectRatio: 'xMidYMid slice',
		},
	};
	return (
		<div className="flex flex-col justify-center items-center h-90">
        <Link to ="/"> 
			<Lottie options={defaultOptions} height={500} width={500} />
		</Link>
        
        <a href="https://lottiefiles.com/user/370154">Created By: Joe David</a>
		</div>
	);
}

export default NotFound;
