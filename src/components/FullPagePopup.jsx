"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Sparkles from "./Sparkles";

const FullPagePopup = ({ close }) => {
  return (
    <div className="flex items-center justify-center h-screen w-full bg-mainBg bg-cover bg-top relative overflow-hidden">
      <div className="w-full absolute top-32">
        <Sparkles delay={0.1} />
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: [0, 1, 1, 0], scale: [0, 1.2, 1.2, 1.2] }}
        transition={{ delay: 0.3, duration: 1, ease: "easeIn" }}
        className="max-w-2xl h-[80%] border-2 border-yellow-300 rounded-2xl w-full absolute"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: [0, 1, 0], scale: [0.7, 1.2, 1.2] }}
        transition={{
          delay: 0.4,
          duration: 0.4,
          ease: "easeOut",
        }}
        className="max-w-2xl h-[80%] border-2 border-yellow-300 rounded-2xl w-full absolute"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: [0, 1, 0], scale: [0.7, 1.2, 1.2] }}
        transition={{
          delay: 0.5,
          duration: 0.4,
          ease: "easeOut",
        }}
        className="max-w-2xl h-[80%] border-2 border-yellow-300 rounded-2xl w-full absolute"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: [0, 1, 0], scale: [0.7, 1.2, 1.2] }}
        transition={{
          delay: 0.6,
          duration: 0.4,
          ease: "easeOut",
        }}
        className="max-w-2xl h-[80%] border-2 border-yellow-300 rounded-2xl w-full absolute"
      />

      <div className="relative bg-brown-800 rounded-lg p-5 text-center text-white max-w-2xl">
        <div className="title-text mt-5 p-5">
          <motion.h1
            className="text-6xl font-bold gradient-text"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}>
            LEVEL UP
          </motion.h1>
        </div>

        <div className="mt-10 relative flex justify-center items-center">
          <Image
            src="/badge.png"
            alt="New Badge"
            width={224}
            height={188}
            className="w-40"
          />
          <motion.div
            className="absolute"
            initial={{ opacity: 0, scale: 3 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeIn" }}>
            <Image
              src="/badge.png"
              alt="New Badge"
              width={224}
              height={188}
              className="w-40"
            />
          </motion.div>
        </div>
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="text-4xl text-[#291911] font-bold mt-10 [text-shadow:_0_2px_3px_rgb(0_0_0_/_60%)]">
          Corporal
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.7 }}>
          <div className="flex justify-between items-center text-sm mt-6 mx-16">
            <div className="text-amber-400">
              <span className="text-white">XP: </span>34,500
            </div>
            <div className="text-white">50,000</div>
          </div>
          <div className="bg-yellow-950 rounded p-1 mt-2 mx-16">
            <motion.div
              className="relative w-full gradient-bar rounded h-3 "
              initial={{ width: "0%" }}
              animate={{ width: "69%" }}
              transition={{ delay: 0.7, duration: 1 }}></motion.div>
          </div>
        </motion.div>

        <motion.button
          onClick={close}
          type="button"
          className="px-6 py-2 mt-5 gradient-button rounded-lg text-[#35241C] text-sm font-bold hover:bg-orange-600 border-2 border-[#35241C]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.3 }}>
          Claim NFT Badge
        </motion.button>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.1, ease: "easeInOut" }}>
          <p className="mt-4 text-[#35241C] font-bold">
            You’ve leveled up and earned a new badge!
          </p>
          <p className="text-white text-sm">
            Claim your{" "}
            <span className="text-[#FFC850] font-bold">NFT badge</span> now, or
            retrieve it later from your Inventory.
          </p>
          <p className="text-[10px] text-white font-light mt-4">
            To claim your new badge, you'll need to transfer your previous badge
            from your wallet for it to be burned in exchange for the new one. If
            there's insufficient gas in your wallet, the transaction will be
            canceled. You can always visit your Inventory and claim your badge
            at any time.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default FullPagePopup;
