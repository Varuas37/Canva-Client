import React,{Fragment} from "react";
import { connect } from "react-redux";
import { Link, Redirect,useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import Alert from "../../Components/Alert/Alert";
import PropTypes from "prop-types";
import { registerUser } from "../../Redux/Action/auth";

const Register = ({ registerUser, isAuthenticated }) => {
  const { register, handleSubmit, watch, errors } = useForm();
  let history = useHistory();
  const onSubmit = async (data) => {
    const { name, lastname, email, password, password2 } = data;
  
    registerUser({ name, lastname, email, password, password2 });
    
    history.push("/login");
   
  };
  if (isAuthenticated) {
    return <Redirect to="/Home" />;
  }
  return (
    <Fragment>
      <div class="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div class="sm:mx-auto sm:w-full sm:max-w-md">
          <Link to="/">
            <img
              class="mx-auto h-12 w-auto"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
              alt="Workflow"
            />
          </Link>

          <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form
              class="space-y-6"
              onSubmit={handleSubmit(onSubmit)}
              noValidate
            >
              <div>


              <label
                  for="email"
                  class="block text-sm font-medium text-gray-700"
                >
                 Name
                </label>
                <div class="mt-1">
                  <input
                    id="name"
                    name="name"
                    type="name"
                    class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    ref={register({
                      required: "Enter your Name",
                   
                    })}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-xs ">
                      {errors.name.message}
                    </p>
                  )}
                  {errors.name && errors.name.type === "minLength" && (
                    <p className="text-red-500 text-xs ">
                      First Name is required
                    </p>
                  )}
                </div>
                <label
                  for="email"
                  class="block text-sm font-medium text-gray-700"
                >
                 Last Name
                </label>
                <div class="mt-1">
                  <input
                    id="lastname"
                    name="lastname"
                    type="lastname"
                    class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    ref={register({
                      required: "Enter your Name",
                   
                    })}
                  />
                  {errors.lastname && (
                    <p className="text-red-500 text-xs ">
                      {errors.lastname.message}
                    </p>
                  )}
                  {errors.lastname && errors.lastname.type === "minLength" && (
                    <p className="text-red-500 text-xs ">
                      Last name is required
                    </p>
                  )}
                </div>
                <label
                  for="email"
                  class="block text-sm font-medium text-gray-700"
                >
                  Email address
                </label>
                <div class="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    ref={register({
                      required: "Enter your e-mail",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                        message: "Enter a valid e-mail address",
                      },
                    })}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs ">
                      {errors.email.message}
                    </p>
                  )}
                  {errors.email && errors.email.type === "minLength" && (
                    <p className="text-red-500 text-xs ">
                      Email is required
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label
                  for="password"
                  class="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <div class="mt-1">
                  <input
                    id="password"
                    type="password"
                    name="password"
                    class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    ref={register({ required: true, minLength: 6 })}
                  />
                  {errors.password && errors.password.type === "required" && (
                    <p className="text-red-500 text-xs ">
                      Password is required
                    </p>
                  )}
                  {errors.password && errors.password.type === "minLength" && (
                    <p className="text-red-500 text-xs ">
                      Minimum of 6 characters required
                    </p>
                  )}
                </div>
              </div>

              <div class="flex items-center justify-between">
                <div class="flex items-center">
                  <input
                    id="remember_me"
                    type="checkbox"
                    class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  />
                  <label
                    for="remember_me"
                    class="ml-2 block text-sm text-gray-900"
                  >
                    Remember me
                  </label>
                </div>

                <div class="text-sm">
                  <a
                    href="#"
                    class="font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    <Link to="/reset-password"> Forgot your Password?</Link>
                  </a>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Sign in
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
};


Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});
export default connect(mapStateToProps, { registerUser })(Register);
