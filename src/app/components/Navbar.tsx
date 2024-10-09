"use client";

import React, { useState } from "react";
import type { RootState } from "../GlobalRedux/store";
import { useSelector, useDispatch } from "react-redux";
import { walletAddress } from "../GlobalRedux/Features/wallet/walletSlice";
import { toast } from "react-toastify";
import { setWalletAddress } from "../GlobalRedux/Features/wallet/walletSlice";

const Navbar = () => {
  const [bgPosition, setBgPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { left, top } = e.currentTarget.getBoundingClientRect();
    const x = clientX - left;
    const y = clientY - top;
    setBgPosition({ x, y });
  };

  const walletAddress = useSelector(
    (state: RootState) => state.wallet.walletAddress
  );
  const dispatch = useDispatch();

  // connect wallet function
  const getPolinkweb = async () => {
    if (walletAddress) {
      return toast.error("Wallet is already connected");
    }

    const obj = setInterval(async () => {
      if (window.pox) {
        clearInterval(obj);
        const detailsData = JSON.stringify(await window.pox.getDetails());
        const parsedDetailsObject = JSON.parse(detailsData);
        console.log(parsedDetailsObject);

        // Dispatching actions to Redux store
        dispatch(setWalletAddress(parsedDetailsObject[1].data?.wallet_address));
      }
    }, 1000);
  };

  return (
    <div className="fixed w-full top-0 left-0">
      <div className="w-11/12 flex justify-between items-center m-auto py-3">
        <img src="Logo.png" alt="" className="w-[200px] max-md:w-[150px]" />

        <button
          type="button"
          className="bg-[#587DBC] px-10 md:px-12 py-2 md:py-3 rounded-lg text-gray-300 font-mono text-xl font-semibold mt-5"
          style={{
            boxShadow:
              "0 2px 20px rgba(0, 0, 0, 0.4), inset 0 0 10px rgba(255, 255, 255, 0.6)", // White shadow with moderate opacity
            background: `radial-gradient(circle at ${bgPosition.x}px ${bgPosition.y}px, rgba(235, 191, 14, 0.7), transparent)`, // Moving background effect
          }}
          onMouseMove={handleMouseMove}
          onClick={getPolinkweb} // Call the function on button click
        >
          {walletAddress ? walletAddress : "CONNECT TO POLINK"}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
