"use client";

import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { toast } from "react-toastify";
// import { setWalletAddress, setNetwork } from "../redux/slice/walletSlice"; // adjust the import path accordingly
// import { RootState } from "@reduxjs/toolkit/query";

const Navbar = () => {
  // const dispatch = useDispatch();
  // const walletAddress = useSelector((state) => state.wallet.walletAddress);

 // connect wallet function
  // const getPolinkweb = async () => {
    
  //   if (walletAddress) {
  //     return toast.error("Wallet is already connected");
  //   }

  //   const obj = setInterval(async () => {
  //     if (window.pox) {
  //       clearInterval(obj);
  //       const detailsData = JSON.stringify(await window.pox.getDetails());
  //       const parsedDetailsObject = JSON.parse(detailsData);
  //       console.log(parsedDetailsObject);

  //       // Dispatching actions to Redux store
  //       dispatch(setWalletAddress(parsedDetailsObject[1].data?.wallet_address));
  //       dispatch(setNetwork(parsedDetailsObject[1].data?.Network));
  //     }
  //   }, 1000);
  // };

  return (
    <div className="fixed w-full top-0 left-0">
      <div className="w-11/12 flex justify-between m-auto py-3">
        <img src="Logo.png" alt="" className="w-[200px] max-md:w-[150px]" />

        <button
          type="button"
          className="bg-white px-10 md:px-12 py-2 md:py-3 rounded-lg text-black text-lg font-bold mt-10"
          // onClick={getPolinkweb} // Call the function on button click
        >
          Connect Wallet
        </button>
      </div>
    </div>
  );
};

export default Navbar;
