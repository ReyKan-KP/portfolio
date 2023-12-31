import React from "react";
import { motion } from "framer-motion";

const Popup = ({ message, onClose }) => {
  return (
    <div className="px-6 py-24 fixed inset-0 bg-black bg-opacity-60 z-0 flex justify-center items-start">
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -100 }}
        className="bg-white p-6 rounded-xl shadow-lg text-center"
      >
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-medium text-gray-900">{message}</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-500 focus:outline-none">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Popup;
