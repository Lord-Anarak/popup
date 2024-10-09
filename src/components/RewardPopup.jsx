"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Sparkles from "./Sparkles";

const RewardPopup = ({ close }) => {
  return (
    <div className="flex items-center justify-center h-screen w-full relative overflow-hidden">
      <div className="max-w-4xl w-full h-[600px] p-7 rounded-3xl bg-gradient-to-t to-[#423540] from-[#16181E] border-4 border-[#423520]">
        <div className="absolute top-20 max-w-4xl w-full">
          <Sparkles />
        </div>
        <div className="flex items-end justify-end w-full h-5">
          <button
            type="button"
            onClick={close}
            className="border border-white rounded h-5 w-5 flex items-center justify-center pb-1 text-white font-semibold z-50">
            x
          </button>
        </div>
        <div className="px-10 mt-7">
          <motion.h2
            initial={{ opacity: 0, scale: 1.4 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, ease: "easeIn" }}
            className="text-4xl font-black text-[#F3BA2F] text-center pb-2">
            Congratulations
          </motion.h2>
          <motion.h4
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeIn", delay: 0.2 }}
            className="text-2xl text-[#F3BA2F] text-center tracking-wider pb-2">
            Command completed Successfully!
          </motion.h4>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeIn", delay: 0.2 }}
            className="text-center text-[#C8AA7A] mt-10 leading-relaxed">
            You have successfully completed a command! Here are your well-earned
            rewards. Keep exploring the Command Center roe even more exciting
            mission and bigger rewards!
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeIn", delay: 0.2 }}
            className="text-center text-[#C8AA7A]">
            You have gained:
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.7 }}
            className="mt-12 mx-20 flex justify-center items-center gap-4">
            <div>
              <Image
                src="/line.png"
                alt="line"
                width={250}
                height={2}
                className="w-52"
              />
            </div>
            <span className="text-white">Rewards</span>
            <div>
              <Image
                src="/line.png"
                alt="line"
                width={250}
                height={8}
                className="w-52 scale-x-[-1]"
              />
            </div>
          </motion.div>
          <div className="flex items-center justify-center gap-10 mt-10">
            <motion.div
              initial={{ opacity: 0, scale: 2, x: 50 }}
              animate={{ opacity: 1, scale: 1, x: [50, 50, 0] }}
              transition={{ delay: 0.7 }}
              className="relative flex items-center justify-center">
              <Image
                src="/frame.png"
                width={142}
                height={153}
                alt="frame"
                className="w-32"
              />
              <div className="absolute top-5">
                <Image
                  src="/xp.png"
                  width={100}
                  height={90}
                  alt="frame"
                  className="w-20"
                />
              </div>
              <p className="absolute bottom-0 left-3 font-bold">20XP</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.5, ease: "easeOut" }}
              className="relative flex items-center justify-center">
              <Image
                src="/frame.png"
                width={142}
                height={153}
                alt="frame"
                className="w-32"
              />
              <div className="absolute top-5">
                <Image
                  src="/points.png"
                  width={100}
                  height={90}
                  alt="frame"
                  className="w-20"
                />
              </div>
              <p className="absolute bottom-0 left-3 font-bold">250,000,000</p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RewardPopup;
