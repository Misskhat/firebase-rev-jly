import React from "react";
import { toast } from "react-toastify";

const Profile = () => {
  const handleNotify = () => {
    toast.success("🎉 You’ll be notified when the profile is ready!", {
      position: "top-center",
      autoClose: 3000,
      theme: "colored",
    });
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-[#90CAF9] via-[#2196F3] to-[#90CAF9] text-center">
      <h1 className="text-5xl md:text-6xl font-bold text-white animate-bounce drop-shadow-lg">
        🧑‍🏫 Profile is Coming Soon !true
      </h1>

      <p className="flex gap-2 mt-5 text-lg text-white/90">
        <span className="opacity-75">
          Firebase revision purpose making this website
        </span>
        <p className="animate-spin">🤓</p>
      </p>

      <div className="mt-10">
        <button
          onClick={handleNotify}
          className="btn btn-outline border-2 text-white border-[#0D47A1] hover:text-[#2196f3] hover:border-none animate-[pulse_2s_infinite]"
        >
          Notify Me
        </button>
      </div>

      <div className="absolute bottom-6 text-white text-sm animate-pulse">
        Developed by <span className="font-bold">Misshkat 🧑‍💻</span>
      </div>
    </div>
  );
};

export default Profile;
