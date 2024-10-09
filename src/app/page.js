"use client";

import FullPagePopup from "@/components/FullPagePopup";
import RewardPopup from "@/components/RewardPopup";
import { useState } from "react";

export default function Home() {
  const [popup, setPopup] = useState(0);

  if (popup === 1) return <FullPagePopup close={() => setPopup(0)} />;

  if (popup === 2) return <RewardPopup close={() => setPopup(0)} />;

  return (
    <div className="">
      <main className="flex h-screen justify-center items-center gap-20 bg-black">
        <button
          type="button"
          onClick={() => setPopup(1)}
          className="px-6 py-2 mt-5 gradient-button rounded-lg text-[#35241C] text-sm font-bold hover:bg-orange-600 border-2 border-[#35241C]">
          Fullpage PopUp
        </button>
        <button
          type="button"
          onClick={() => setPopup(2)}
          className="px-6 py-2 mt-5 gradient-button rounded-lg text-[#35241C] text-sm font-bold hover:bg-orange-600 border-2 border-[#35241C]">
          Reward PopUp
        </button>
      </main>
    </div>
  );
}
