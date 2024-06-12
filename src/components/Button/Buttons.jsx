export default function Buttons({ title, link, style }) {
  return (
    <a
      href={link}
      className={` rounded-md cursor-pointer ${style}`}
    >
      {title}
    </a>
  );
}
