"use client";
import { motion } from "framer-motion";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { FaGoogle } from "react-icons/fa";
const LoginPage = () => {
  const searchParams = useSearchParams();
  const redirect = searchParams.get("redirect");
  // You can later add an actual Google login function here

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      {/* Login container */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="bg-white rounded-2xl shadow-lg p-10 w-full max-w-md"
      >
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
          Login
        </h2>

        {/* Form */}
        <form className="space-y-4">
          <div>
            <label className="block text-gray-700 text-sm mb-2">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 bg-gray-200 text-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 placeholder-gray-500"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block text-gray-700 text-sm mb-2">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 bg-gray-200 text-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 placeholder-gray-500"
              placeholder="Enter your password"
            />
          </div>

          {/* Login Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="w-full bg-purple-500 text-white py-3 rounded-lg hover:bg-purple-600 transition duration-300"
          >
            Login
          </motion.button>
        </form>

        {/* Google Login Button */}
        <div className="my-4 flex items-center justify-center">
          <span className="text-gray-600">OR</span>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="w-full bg-red-500 text-white py-3 rounded-lg mt-4 hover:bg-red-600 transition duration-300 flex items-center justify-center"
          onClick={() => {
            // Handle Google Login logic here
            signIn("google", {
              callbackUrl: redirect ? redirect : "http://localhost:3000/",
            });
          }}
        >
          <FaGoogle size={20} className="mr-2" />
          Continue with Google
        </motion.button>

        <p className="text-center py-3">
          Dont have any account?{" "}
          <span className="text-green-500">
            <Link href="/register" className="underline">
              Register Now
            </Link>
          </span>
        </p>
      </motion.div>
    </div>
  );
};

export default LoginPage;
