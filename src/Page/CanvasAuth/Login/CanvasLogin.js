import React, { Fragment } from "react";
import { mainLogo } from "../../../Static/Images/images";
import { Link, Redirect } from "react-router-dom";
import { useForm } from "react-hook-form";
import {connect} from "react-redux"
import {connectToCanvas} from "../../../Redux/Action/canvasauth";
import PropTypes from 'prop-types'





const CanvasLogin = ({connectToCanvas,user}) => {

  const { register, handleSubmit, errors } = useForm();
    const onSubmit = (data) => {
      const { token, domain  } = data;
      window.location.replace("/dashboard")
      connectToCanvas(domain,token);
    };
    // if (!auth.isAuthenticated){
    //   return <Redirect to="/login"/>
    // }

    if (user.canvasConnected) {
      return <Redirect to="/Dashboard" />;
    }
  
  return !user.canvasConnected && (
    <Fragment>
      {/* <!--
  Tailwind UI components require Tailwind CSS v1.8 and the @tailwindcss/ui plugin.
  Read the docu
  mentation to get started: https://tailwindui.com/documentation
--> */}
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full">
          <div>
            <Link to="/">
              <img
                className="mx-auto h-12 w-auto"
                src={mainLogo}
                alt="Workflow"
              />
            </Link>

            <Link
              to="/"
              className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900"
            >
              Login to your canvas account
            </Link>
            {/* <p className="mt-2 text-center text-sm leading-5 text-gray-600">
        Or
        <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150">
          start your 14-day free trial
        </a>
      </p> */}
          </div>
          <form className="mt-8" onSubmit={handleSubmit(onSubmit)}
        noValidate>
            <input type="hidden" name="remember" value="true" />
            <div className="rounded-md shadow-sm">
              <div>
                <input
                  aria-label="Domain address"
                  name="domain"
                  type="domain"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
                  placeholder="Domain Name"
                  ref={register({
                    required: "Enter your Domain Name",
                    // pattern: {
                    //   value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    //   message: "Enter a valid domain address",
                    // },
                  })}
                />
                {/* {errors.Domain && <p className="text-red-500 text-xs italic">{errors.Domain.message}</p>} */}
          {errors.domain && errors.domain.type === "minLength" && (
            <p className="text-red-500 text-xs italic">Domain name is required</p>
            
                      )}
              </div>
              <div className="-mt-px">
                <input
                  aria-label="Password"
                  name="token"
                  type="token"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
                  placeholder="Token"
                  ref={register({ required: true, minLength: 6 })}
                />
                    {errors.token && errors.token.type === "required" && (
            <p className="text-red-500 text-xs italic">token is required</p>
          )}
          {errors.token && errors.token.type === "minLength" && (
            <p className="text-red-500 text-xs italic">Minimum of 6 characters required</p>
          )}
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember_me"
                  type="checkbox"
                  className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                />
                <label
                  htmlFor="remember_me"
                  className="ml-2 block text-sm leading-5 text-gray-900"
                >
                  Remember me
                </label>
              </div>

              <div className="text-sm leading-5">
                <a
                  href="#"
                  className="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150"
                >
                  Forgot your token?
                </a>
              </div>
            </div>

            <div className="mt-6">
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <svg
                    className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400 transition ease-in-out duration-150"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
};
CanvasLogin.propTypes = {
    setAlert: PropTypes.func.isRequired,
    connectToCanvas: PropTypes.func.isRequired,

}
const mapStateToProps = (state) => ({
  canvasAuth: state.canvasauth,
  user: state.auth.user,
});
export default connect(mapStateToProps,{connectToCanvas})(CanvasLogin);
