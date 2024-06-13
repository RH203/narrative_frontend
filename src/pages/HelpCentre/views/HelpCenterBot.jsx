import React from "react";
import { useState } from "react";
import { Helmet } from "react-helmet";
import { IoMdSend } from "react-icons/io";

export default function HelpCenterBot() {
  const [roomId, setRoomId] = useState(null);
  const [askOptions, setAskOptions] = useState(null);

  const changeAskOptions = (value) => {
    setAskOptions(value);
  };

  return (
    <div className="w-10/12 mx-auto font-poppins">
      <Helmet>
        <title>Assistan Nara - Narrative</title>
      </Helmet>

      {/* Title Start */}
      <div className="w-full text-gray-800 font-semibold text-center text-3xl mt-10">
        {askOptions
          ? "Chat with Nara: Assistance 24/7"
          : askOptions === false
          ? "Live Support Chat: Connect with Our Team Instantly"
          : "Choose your options"}
      </div>
      {/* Title End */}

      <hr className="border border-gray-300 my-14" />

      {/* Chat bot */}
      {askOptions && (
        <div>
          {" "}
          {/* Ask Chat bot */}
          {/* Container chat Start */}
          <div className="w-full h-96 shadow-lg bg-white rounded-t-lg p-10 text-gray-800 font-medium overflow-y-auto">
            {/* Chat admin Start */}
            <div className="chat chat-start">
              <div className="chat-image avatar">
                <div className="w-10 rounded-full border border-gray-800">
                  <img
                    alt="Tailwind CSS chat bubble component"
                    src="/icon/narrative.png"
                  />
                </div>
              </div>
              <div className="chat-header">
                Obi-Wan Kenobi
                <time className="text-xs opacity-50 p-1">12:45</time>
              </div>
              <div className="chat-bubble text-white">
                You were the Chosen One!
              </div>
            </div>
            {/* Chat admin End */}

            {/* Chat User Start */}
            <div className="chat chat-end">
              <div className="chat-image avatar">
                <div className="w-10 rounded-full border border-gray-800">
                  <img
                    alt="Tailwind CSS chat bubble component"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                  />
                </div>
              </div>
              <div className="chat-header">
                Anakin
                <time className="text-xs opacity-50 p-1">12:46</time>
              </div>
              <div className="chat-bubble text-white">I hate you!</div>
            </div>
            {/* Chat User End */}
          </div>
          {/* Container chat End */}
          {/* Input user Start */}
          <div className="join w-full">
            <input
              className="input input-bordered join-item w-full bg-gray-300 placeholder:text-gray-800 text-gray-800"
              placeholder="Enter your message"
            />
            <button className="join-item rounded-r-lg bg-indigo-600 text-white font-semibold px-5">
              <IoMdSend size={25} />
            </button>
          </div>
          {/* Input user End */}
        </div>
      )}

      {/* Chat Admin */}
      {askOptions === false && (
        <div>
          {" "}
          {/* Ask Chat bot */}
          {/* Container chat Start */}
          <div className="w-full h-96 shadow-lg bg-white rounded-t-lg p-10 text-gray-800 font-medium overflow-y-auto">
            {/* Chat admin Start */}
            <div className="chat chat-start">
              <div className="chat-image avatar">
                <div className="w-10 rounded-full border border-gray-800">
                  <img
                    alt="Tailwind CSS chat bubble component"
                    src="/icon/narrative.png"
                  />
                </div>
              </div>
              <div className="chat-header">
                Obi-Wan Kenobi
                <time className="text-xs opacity-50 p-1">12:45</time>
              </div>
              <div className="chat-bubble text-white">
                You were the Chosen One!
              </div>
            </div>
            {/* Chat admin End */}

            {/* Chat User Start */}
            <div className="chat chat-end">
              <div className="chat-image avatar">
                <div className="w-10 rounded-full border border-gray-800">
                  <img
                    alt="Tailwind CSS chat bubble component"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                  />
                </div>
              </div>
              <div className="chat-header">
                Anakin
                <time className="text-xs opacity-50 p-1">12:46</time>
              </div>
              <div className="chat-bubble text-white">I hate you!</div>
            </div>
            {/* Chat User End */}
          </div>
          {/* Container chat End */}
          {/* Input user Start */}
          <div className="join w-full">
            <input
              className="input input-bordered join-item w-full bg-gray-300 placeholder:text-gray-800 text-gray-800"
              placeholder="Enter your message"
            />
            <button className="join-item rounded-r-lg bg-indigo-600 text-white font-semibold px-5">
              <IoMdSend size={25} />
            </button>
          </div>
          {/* Input user End */}
        </div>
      )}

      {askOptions === null && (
        <div className="w-full h-96 shadow-lg bg-white rounded-lg p-10 flex justify-center items-center gap-10">
          <button
            onClick={() => changeAskOptions(true)}
            className="bg-indigo-600 text-white font-semibold text-xl lg:px-10 lg:py-5 md:px-10 md:py-5 rounded-lg shadow-lg hover:bg-indigo-500 sm:px-5 sm:py-3"
          >
            Ask Nara{" "}
          </button>
          <p className="text-gray-600 font-medium">or</p>
          <button
            onClick={() => changeAskOptions(false)}
            className="text-black font-semibold text-xl lg:px-10 lg:py-5 md:px-10 md:py-5 shadow-lg sm:px-5 sm:py-3 rounded-lg"
          >
            Call admin
          </button>
        </div>
      )}
    </div>
  );
}
