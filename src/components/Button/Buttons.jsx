export default function Buttons({ title, link, style }) {
  return (
    <a
      href={link}
      className={`px-7 py-3 rounded-md cursor-pointer ${style}`}
    >
      {title}
    </a>
  );
}
