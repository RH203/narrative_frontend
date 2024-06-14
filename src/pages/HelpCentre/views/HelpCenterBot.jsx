import React, { useState, useEffect, Suspense } from "react";
import { Helmet } from "react-helmet";
import { IoMdSend } from "react-icons/io";
import roomChat from "../../../../service/supabase";
import responseBot from "../../../../service/chatBot";
import formatText from "../../../utils/helper/formatText";

export default function HelpCenterBot() {
  const [askOptions, setAskOptions] = useState(null);
  const [statusDelivery, setStatusDelivery] = useState(null);
  const [historyMessage, setHistoryMessage] = useState([]);
  const [message, setMessage] = useState("");

  const changeAskOptions = (value) => {
    setAskOptions(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newMessage = { message: message, type: "user" };

    setHistoryMessage([...historyMessage, newMessage]);

    roomChat.send({
      type: "broadcast",
      event: "message",
      payload: { message },
    });

    setMessage("");
  };

  const handleSubmitBot = async (event) => {
    event.preventDefault();
    console.log("this function run");

    const newMessage = { message: message, type: "user" };
    setHistoryMessage([...historyMessage, newMessage]);
    setStatusDelivery(false);

    setMessage("");

    const response = await responseBot(message);
    // const formatResponse = formatText(response);
    // setHistoryMessage((prevMessages) => [
    //   ...prevMessages,
    //   { message: formatResponse, type: "bot" },
    // ]);
    setHistoryMessage((prevMessages) => [
      ...prevMessages,
      { message: response, type: "bot" },
    ]);
    setStatusDelivery(true);

    console.log("this function done");
  };

  return (
    <div className="w-10/12 mx-auto font-poppins">
      <Helmet>
        <title>Assistant Nara - Narrative</title>
      </Helmet>

      <div className="w-full text-gray-800 font-semibold text-center text-3xl mt-10">
        {askOptions
          ? "Chat with Nara: Assistance 24/7"
          : askOptions === false
          ? "Live Support Chat: Connect with Our Team Instantly"
          : "Choose your options"}
      </div>

      <hr className="border border-gray-300 my-14" />

      {/* Bot section */}
      {askOptions && (
        <div>
          <div className="w-full h-96 shadow-lg bg-white rounded-t-lg p-10 text-gray-800 font-medium overflow-y-auto">
            {historyMessage.map((msg, index) => (
              <div
                className={`chat ${
                  msg.type === "user" ? "chat-end" : "chat-start"
                }`}
                key={index}
              >
                <div className="chat-image avatar">
                  <div className="w-10 rounded-full border border-gray-800">
                    <img
                      alt="Tailwind CSS chat bubble component"
                      src={
                        msg.type === "user"
                          ? "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                          : "/icon/narrative.png"
                      }
                    />
                  </div>
                </div>
                <div className="chat-header">
                  {msg.type === "user" ? "User" : "Nara"}
                  <time className="text-xs opacity-50 p-1">
                    {new Date().getHours()}:{new Date().getMinutes()}
                  </time>
                </div>
                <div className="chat-bubble text-white">{msg.message}</div>
                <div className="chat-footer opacity-50">
                  {statusDelivery ? "Delivered" : "Sending..."}
                </div>
              </div>
            ))}
          </div>

          <form className="join w-full" onSubmit={handleSubmitBot}>
            <input
              className="input input-bordered join-item w-full bg-gray-300 placeholder:text-gray-800 text-gray-800"
              placeholder="Enter your message"
              onChange={(event) => setMessage(event.target.value)}
              value={message}
            />
            <button
              className="join-item rounded-r-lg bg-indigo-600 text-white font-semibold px-5"
              type="submit"
            >
              <IoMdSend size={25} />
            </button>
          </form>
        </div>
      )}

      {/* Admin section */}
      {askOptions === false && (
        <div>
          <div className="w-full h-96 shadow-lg bg-white rounded-t-lg p-10 text-gray-800 font-medium overflow-y-auto">
            {historyMessage.map((msg, index) => (
              <div
                className={`chat ${
                  msg.type === "user" ? "chat-end" : "chat-start"
                }`}
                key={index}
              >
                <div className="chat-image avatar">
                  <div className="w-10 rounded-full border border-gray-800">
                    <img
                      alt="Tailwind CSS chat bubble component"
                      src={
                        msg.type === "user"
                          ? "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                          : "/icon/narrative.png"
                      }
                    />
                  </div>
                </div>
                <div className="chat-header">
                  {msg.type === "user" ? "User" : "Nara"}
                  <time className="text-xs opacity-50 p-1">
                    {new Date().getHours()} : {new Date().getMinutes()}
                  </time>
                </div>
                <div className="chat-bubble text-white">{msg.message}</div>
              </div>
            ))}
          </div>

          <form className="join w-full" onSubmit={handleSubmit}>
            <input
              className="input input-bordered join-item w-full bg-gray-300 placeholder:text-gray-800 text-gray-800"
              placeholder="Enter your message"
              onChange={(event) => setMessage(event.target.value)}
              value={message}
            />
            <button
              className="join-item rounded-r-lg bg-indigo-600 text-white font-semibold px-5"
              type="submit"
            >
              <IoMdSend size={25} />
            </button>
          </form>
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
