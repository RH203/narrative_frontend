import React from "react";

export default function CardCategory({ title, href, style }) {
  return (
    <a
      href={href}
      className={`w-full p-5 mx-auto rounded-lg shadow-lg transition duration-500 ${style}`}
    >
      {title}
    </a>
  );
}
