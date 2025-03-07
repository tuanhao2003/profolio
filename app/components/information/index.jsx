"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const Typed = dynamic(() => import("react-typed").then((mod) => mod.default), {
  ssr: false,
});

export default function IndexPage() {
  const moreInfoRef = useRef(null);

  const scrollToMoreInfo = () => {
    moreInfoRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="flex flex-col items-center justify-center bg-[#0d1224] p-6 w-full min-h-screen">
      {/* Tiêu đề */}
      <motion.div
        className="text-3xl md:text-5xl lg:text-6xl font-black text-center mb-6 tracking-tight"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-300 via-cyan-400 to-blue-500">
          Welcome to the Portfolio of
        </span>
      </motion.div>

      {/* Tên */}
      <motion.div
        className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-center mb-8 text-white"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        Nguyễn Huỳnh Tuấn Hào
      </motion.div>

      <motion.div
        className="text-2xl md:text-3xl lg:text-3xl font-light text-center text-teal-200 mb-8 italic"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        <span>Web Developer</span>
      </motion.div>

      {/* Mô tả */}
      <motion.div
        className="max-w-3xl text-center text-gray-300 mb-8 text-xl md:text-2xl lg:text-xl leading-relaxed font-light"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.4 }}
      >
        <p className="mb-3">
          I specialize in creating inspiring and creative web experiences.
        </p>
        <p>
          Every line of code is a work of art, every pixel is a perfect detail.
        </p>
      </motion.div>

      <motion.button
        onClick={scrollToMoreInfo}
        className="px-8 py-4 border-2 text-white rounded-xl text-xl font-semibold shadow-lg transition-all duration-300 relative overflow-hidden group"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.6 }}
        style={{
          borderImage: "linear-gradient(45deg, #003366, #4B0082, #800080) 1",
          borderImageSlice: 1,
        }}
      >
        More Information ↓
      </motion.button>

      {/* Thêm một phần tử vô hình để cuộn đến */}
      <span ref={moreInfoRef} className="h-[1px] w-full"></span>
    </div>
  );
}
