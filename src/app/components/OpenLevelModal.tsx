import { X } from "lucide-react";
 import GameModal from "./GameModal";
import { useState } from "react";

 
interface OpenLevelModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const OpenLevelModal: React.FC<OpenLevelModalProps> = ({ isOpen, onClose }) => {
    const [gameModalOpen, setGameModalOpen] = useState(false);
    const [bgPosition, setBgPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = ({e} :{e : any}) => {
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
      onMouseMove={(e: any) => handleMouseMove(e)}
      className="relative w-[90%] max-w-[800px] h-[400px] mx-auto bg-gray-800 bg-opacity-90 rounded-lg p-6 shadow-lg flex flex-col items-center"
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

        <p className="text-center text-gray-300 font-mono text-2xl font-bold pt-4">LEVEL</p>

        <div className=" max-w-[400px]  flex flex-col  pt-6 font-mono">
           
          <button
            type="button"
            onClick={() => setGameModalOpen(true)}
            onMouseMove={(e: any) => handleMouseMove(e)}
            className="px-24 font-semibold bg-slate-900 text-gray-300 font-mono 
             flex mb-8 py-3 justify-center rounded-xl w-10/12 
             uppercase font-regular text-2xl mx-auto 
             max-md:text-xl transition-transform 
             duration-300 ease-in-out 
             hover:scale-105 "
           
          >
            High
          </button>

          <button
            type="button"
            onClick={() => setGameModalOpen(true)}
            className=" px-24 font-semibold bg-slate-900 m-auto text-gray-300 font-mono
            transition-transform 
             duration-300 ease-in-out 
             hover:scale-105 flex mb-8 py-3 justify-center rounded-xl w-10/12 uppercase 
            font-regular text-2xl mx-auto max-md:text-xl "
          >
            Medium
          </button>

          <button
            type="button"
            onClick={() => setGameModalOpen(true)}
            className="px-24 font-semibold bg-slate-900 m-auto text-gray-300 font-mono  transition-transform 
             duration-300 ease-in-out hover:scale-105 flex mb-8 py-3 justify-center rounded-xl w-10/12 
             uppercase font-regular text-2xl mx-auto max-md:text-xl "
          >
            Low
          </button>
        </div>

        <GameModal isOpen={gameModalOpen} onClose={() => setGameModalOpen(false)} /> 
      </div>
    </div>
  );
};

export default OpenLevelModal;
