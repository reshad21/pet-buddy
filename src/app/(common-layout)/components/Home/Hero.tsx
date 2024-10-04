"use client";
import { Button } from "@nextui-org/react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-8 bg-gray-100">
      {/* Left Side: Text */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="flex-1"
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Welcome to Pet Care Tips & Stories
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Discover the best tips for taking care of your pets and read
          heartwarming stories from pet owners around the world.
        </p>

        {/* Get Started Button */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-4"
        >
          <Link href="/login">
            <Button radius="lg" className="bg-slate-800 text-slate-200">
              Get Start
            </Button>
          </Link>
        </motion.div>
      </motion.div>

      {/* Right Side: Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="flex-1 mt-8 md:mt-0 md:ml-8"
      >
        <Image
          src="/assets/hero-section.png"
          alt="Pet Care"
          width={500}
          height={500}
          className="rounded-lg shadow-lg w-full h-auto"
        />
      </motion.div>
    </div>
  );
};

export default Hero;
