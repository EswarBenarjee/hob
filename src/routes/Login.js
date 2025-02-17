import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dynamicHeight = 90 + 5 * Object.keys(errors).length;

  const onSubmit = (data) => {
    console.log("Login Data:", data);
    // Add your login logic here (authentication, redirect, etc.)
    // For example, you can use Firebase, JWT, or any backend service.

    // Redirect to home or dashboard after successful login
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div
        className={`bg-white m-8 p-8 rounded-lg shadow-lg w-96 h-${dynamicHeight} z-1`}
      >
        <h2 className="text-primary text-2xl font-bold text-center mb-4">
          SIGN IN
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-gray-700">Email:</label>
            <input
              type="email"
              {...register("email", { required: "Email is required" })}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                <i class="fa-solid fa-triangle-exclamation me-1"></i>
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-gray-700">Password:</label>
            <input
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                <i class="fa-solid fa-triangle-exclamation me-1"></i>
                {errors.password.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-300"
          >
            Sign In
          </button>

          <div className="text-center">
            New Here?{" "}
            <Link to="/register" className="text-blue-500">
              Sign up and get started!
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
