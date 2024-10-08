import { X } from "lucide-react";

interface OpenLevelModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const OpenLevelModal: React.FC<OpenLevelModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-lg flex justify-center items-center z-50">
      <div className="relative w-[90%] max-w-[800px] h-[400px] mx-auto bg-gray-800 bg-opacity-90 rounded-lg p-6 shadow-lg flex flex-col items-center">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:bg-gray-700 p-2 rounded-full"
        >
          <X size={24} className="text-white" />
        </button>

        <div className="bg-gray-800 max-w-[400px]  flex flex-col  pt-12">
         
          <button
            type="button"
            className="px-12 font-semibold bg-slate-900 text-gray-300 font-mono 
             flex mb-8 py-3 justify-center rounded-xl w-10/12 
             uppercase font-regular text-2xl mx-auto 
             max-md:text-xl transition-transform 
             duration-300 ease-in-out 
             hover:scale-105"
          >
            High
          </button>

          <button
            type="button"
            className=" px-12 font-semibold bg-slate-900 m-auto text-gray-300 font-mono
            transition-transform 
             duration-300 ease-in-out 
             hover:scale-105 flex mb-8 py-3 justify-center rounded-xl w-10/12 uppercase 
            font-regular text-2xl mx-auto max-md:text-xl"
            >
            Medium
          </button>

          <button
            type="button"
            className="px-12 font-semibold bg-slate-900 m-auto text-gray-300 font-mono  transition-transform 
             duration-300 ease-in-out hover:scale-105 flex mb-8 py-3 justify-center rounded-xl w-10/12 
             uppercase font-regular text-2xl mx-auto max-md:text-xl"
          >
            Low
          </button>
        </div>
      </div>
    </div>
  );
};

export default OpenLevelModal;
