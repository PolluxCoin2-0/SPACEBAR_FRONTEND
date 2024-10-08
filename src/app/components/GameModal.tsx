import React from "react";
import { X } from "lucide-react";

interface GameModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const GameModal: React.FC<GameModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
      <div className="relative w-[90%] max-w-4xl h-[540px]  mx-auto bg-gray-800 bg-opacity-80  rounded-md backdrop-blur-md  shadow-lg  ">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white  p-2 rounded-full hover:bg-gray-700 transition duration-200"
        >
          <X size={24} className="text-white " />
        </button>
        <div className="flex flex-col items-center">
          <iframe
            src="/spaceBar-game/index.html"
            className="w-full h-[540px] pt-5 rounded-lg border-2 border-gray-600 shadow-lg"
            title="SpaceBar1.0"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default GameModal;
