import React, { useState } from "react";
import { X } from "lucide-react";

interface GameDescriptionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const GameDescriptionModal: React.FC<GameDescriptionModalProps> = ({
  
  isOpen,
  onClose,
}) => {
  const [bgPosition, setBgPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = ({e} : {e:any}) => {
    const { clientX, clientY } = e;
    const { left, top } = e.currentTarget.getBoundingClientRect();
    const x = clientX - left;
    const y = clientY - top;
    setBgPosition({ x, y });
  };
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-lg flex justify-center items-center z-50">
      <div 
      className="relative w-[90%] max-w-[800px] h-[400px] mx-auto bg-gray-800 bg-opacity-90 rounded-lg p-6 shadow-lg flex flex-col items-center"
      onMouseMove={(e)=>handleMouseMove(e)}
         style={{
          boxShadow:
            "0 2px 20px rgba(0, 0, 0, 0.4), inset 0 0 10px rgba(255, 255, 255, 0.6)", // White shadow with moderate opacity
          background: `radial-gradient(circle at ${bgPosition.x}px ${bgPosition.y}px, rgba(235, 191, 14, 0.7), transparent)`, // Moving background effect
        }}>
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:bg-gray-700 p-2 rounded-full"
        >
          <X size={24} className="text-white" />
        </button>
        <div className="flex flex-col items-center justify-center h-full">
          <h2 className="text-gray-300 text-2xl font-semibold font-mono text-center">
            Welcome to SpaceBar!
          </h2>
          <p className="text-gray-300 mt-4 text-center text-lg font-light font-mono">
            SpaceBar is a fun arcade space adventure where players control an
            astronaut navigating through a path filled with lasers. You can play
            alone in Solo Play or join your friends in Multiplayer mode for some
            friendly competition. Connect your MetaMask wallet to get started
            and use in-game currency (gems) to join the action. Dodge the
            lasers, take on exciting challenges, and compete to win gems in this
            thrilling space journey!
          </p>
        </div>
      </div>
    </div>
  );
};

export default GameDescriptionModal;
