import React, { useContext, useState } from "react";
import { motion } from "framer-motion";
import { FaGoogle, FaTelegramPlane, FaPhone } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { loginSchema, signUpSchema } from "../services/zod.js";
import { zodResolver } from "@hookform/resolvers/zod";
import { postApi } from "../services/api";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { is } from "zod/v4/locales";
const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const { login } = useContext(AuthContext);

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(isSignUp ? signUpSchema : loginSchema),
  });

  const containerVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
    hover: {
      scale: 1.03,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  const formVariants = {
    hidden: { opacity: 0, rotateY: -90 },
    visible: {
      opacity: 1,
      rotateY: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };
  const onSubmit = async (data) => {
    const res = isSignUp
      ? await postApi("/auth/register", data)
      : await postApi("auth/login", data);
    login(res);
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-300 via-purple-300 to-indigo-400">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        whileHover="hover"
        className="w-full max-w-md p-8 b-white/60 backdrop-blur-lg shadow-xl rounded-xl transform transition-transform perspective"
        style={{
          boxShadow: "0px 10px 30px rgba(0,0,0,0.2)",
        }}
      >
        <h1 className="text-3xl font-bold text-indigo-700 text-center">
          Upper Book
        </h1>
        <h1 className="text-xl font-semibold text-indigo-700 text-center mt-2">
          {isSignUp ? "Create Account" : "Welcome Back"}
        </h1>
        <motion.form
          variants={formVariants}
          key={isSignUp ? "sighUpForm" : "signInForm"}
          initial="hidden"
          animate="visible"
          className="mt-6 space-y-6"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="space-y-4">
            {isSignUp && (
              <div>
                <label className="block text-gray-700">Full Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-00 bg-white/90 "
                  {...register("fullName")}
                />

                {errors.fullName && (
                  <p className="text-red-700 text-sm mt-2">
                    {errors.fullName.message}
                  </p>
                )}
              </div>
            )}

            <div>
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                placeholder="you@gmail.com"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-400 bg-white/90"
                {...register("email")}
              />
              {errors.email && (
                <p className="text-red-700 text-sm mt-2">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div>
              <label className="block text-gray-700"> Password</label>
              <input
                type="password"
                placeholder="********"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-400 bg-white/90"
                {...register("password")}
              />
              {errors.password && (
                <p className="text-red-700 text-sm mt-2">
                  {errors.password.message}
                </p>
              )}
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-4 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            {isSignUp ? "Sign Up " : "Sign In"}
          </button>
        </motion.form>

        <div className="mt-6">
          <p className="text-center text-gray-600 font-medium mb-4">
            Or sign in with
          </p>
          <div className="flex justify-center gap-6">
            <a href="http://localhost:5500/api/auth/google">
              <button className="flex items-center justify-center bg-gray-600 text-white p-3 rounded-full shadow-md hover:shadow-lg transform hover:-translate-y-1 focus:ring-2 focus:ring-red-400">
                <FaGoogle size={20} />
              </button>
            </a>
          </div>
        </div>

        <div className="mt-6 text-center">
          <p className="text-gray-600">
            {isSignUp ? "Already have an account? " : "Don't have an account? "}
            {""}
            <span
              onClick={() => setIsSignUp(!isSignUp)}
              className="text-indigo-600 font-medium cursor-pointer hover:underline"
            >
              {isSignUp ? "Sign In" : "Sign Up"}
            </span>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Auth;
