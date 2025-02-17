import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom"; // Updated import for Link

const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const dynamicHeight = 110 + 5 * Object.keys(errors).length;

  const onSubmit = (data) => {
    console.log("Register Data:", data);
    // Add your register logic here (API call, Firebase, etc.)
    // Redirect to login or home page after successful registration
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div
        className={`bg-white m-8 p-8 rounded-lg shadow-lg w-96 h-${dynamicHeight} z-1`}
      >
        <h2 className="text-primary text-2xl font-bold text-center mb-4">
          SIGN UP
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
                <i className="fa-solid fa-triangle-exclamation me-1"></i>
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
                <i className="fa-solid fa-triangle-exclamation me-1"></i>
                {errors.password.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-gray-700">Confirm Password:</label>
            <input
              type="password"
              {...register("confirmPassword", {
                required: "Please confirm your password",
                validate: (value) =>
                  value === watch("password") || "Passwords do not match",
              })}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm mt-1">
                <i className="fa-solid fa-triangle-exclamation me-1"></i>
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-300"
          >
            Sign Up
          </button>

          <div className="text-center">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-500">
              Sign In here!
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
