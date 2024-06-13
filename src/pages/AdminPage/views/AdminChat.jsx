import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { IoMdSend } from "react-icons/io";
import roomChat from "../../../../service/supabase";

export default function AdminChat() {
  const [historyMessage, setHistoryMessage] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const receiveMessage = (payload) => {
      setHistoryMessage((prevMessages) => [...prevMessages, { message: payload.message, type: "bot" }]);
    };

    roomChat.on("broadcast", { event: "message" }, (payload) => {
      console.log("Message received:", payload);
      receiveMessage(payload);
    });

    return () => {
      roomChat.off("broadcast", { event: "message" });
    };
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newMessage = { message, type: "user" };

    setHistoryMessage([...historyMessage, newMessage]);

    roomChat.send({
      type: "broadcast",
      event: "message",
      payload: { message },
    });

    setMessage("");
  };

  return (
    <div className="w-10/12 mx-auto mt-20">
      <Helmet>
        <title>Chat - Narrative</title>
      </Helmet>

      {/* Title Start */}
      <div className="w-full text-gray-800 font-semibold text-center text-3xl">
        Room X
      </div>
      {/* Title End */}

      <hr className="border border-gray-300 my-14" />

      {/* Container chat Start */}
      <div className="h-96 p-4 rounded-lg bg-gray-200 shadow-lg text-gray-800 font-medium overflow-y-auto">
        {historyMessage.map((msg, index) => (
          <div className={`chat ${msg.type === 'user' ? 'chat-end' : 'chat-start'}`} key={index}>
            <div className="chat-image avatar">
              <div className="w-10 rounded-full border border-gray-800">
                <img
                  alt="Tailwind CSS chat bubble component"
                  src={msg.type === 'user' ? "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" : "/icon/narrative.png"}
                />
              </div>
            </div>
            <div className="chat-header">
              {msg.type === 'user' ? "User" : "Nara"}
              <time className="text-xs opacity-50 p-1">
                {new Date().getHours()} : {new Date().getMinutes()}
              </time>
            </div>
            <div className="chat-bubble text-white">{msg.message}</div>
          </div>
        ))}
      </div>
      {/* Container chat End */}

      {/* Button start */}
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
      {/* Button End */}
    </div>
  );
}
